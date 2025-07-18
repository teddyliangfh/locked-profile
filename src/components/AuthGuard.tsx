"use client";
import { ReactNode, useState, useEffect } from "react";
import { useUserInfoContext, UserInfoProvider } from "@/providers/UserInfoProvider";
import { BlockingDialog } from "@/components/ui/BlockingDialog";

function AuthGuardInner({ children }: { children: ReactNode }) {
  const { userInfo, saveUserInfo } = useUserInfoContext();
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (userInfo === null) { setDialogOpen(true) }
  }, [userInfo]);

  const handleSave = (info: { username: string; jobTitle: string }) => {
    saveUserInfo(info);
    setDialogOpen(false);
  };

  // Handle dialog close (via close/cancel button)
  const handleClose = () => {
    console.log("handleClose")
    setDialogOpen(false);
  };

  return (
    <>
      <BlockingDialog isOpen={dialogOpen} onSave={handleSave} onClose={handleClose} />
      {userInfo?.username && children}
    </>
  );
}

export function AuthGuard({ children }: { children: ReactNode }) {
  return (
    <UserInfoProvider>
      <AuthGuardInner>{children}</AuthGuardInner>
    </UserInfoProvider>
  );
}
