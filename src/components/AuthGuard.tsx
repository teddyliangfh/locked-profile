"use client";
import { ReactNode, useState, useEffect } from "react";
import {
  useUserInfoContext,
  UserInfoProvider,
} from "@/providers/UserInfoProvider";
import { BlockingDialog } from "@/components/BlockingDialog";
import { Box, Button } from "@chakra-ui/react";

function AuthGuardInner({ children }: { children: ReactNode }) {
  const { userInfo, saveUserInfo } = useUserInfoContext();
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (userInfo === null) {
      setDialogOpen(true);
    }
  }, [userInfo]);

  const handleSave = (info: { username: string; jobTitle: string }) => {
    saveUserInfo(info);
    setDialogOpen(false);
  };

  // Handle dialog close (via close/cancel button)
  const handleClose = () => {
    console.log("handleClose");
    setDialogOpen(false);
  };

  return (
    <>
      {userInfo === null && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100vw"
          height="100vh"
          position="fixed"
          top={0}
          left={0}
          zIndex={1000}
        >
          <Box display="flex" alignItems="center">
            <span>Please</span>
            <Button
              m={2}
              variant="outline"
              fontWeight={500}
              fontSize={16}
              bg="cyberpunk.gradient"
              color="white"
              borderRadius="md"
              _hover={{
                transform: "translateY(-2px)",
              }}
              transition="all 0.3s ease"
              onClick={() => setDialogOpen(true)}
            >
              Enter User Info
            </Button>
            <span>to acess other pages</span>
          </Box>
        </Box>
      )}

      <BlockingDialog
        isOpen={dialogOpen}
        onSave={handleSave}
        onClose={handleClose}
      />
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
