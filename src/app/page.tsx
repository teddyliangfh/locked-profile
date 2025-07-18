"use client";
import { Button, Text, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useUserInfoContext } from "@/providers/UserInfoProvider";
import { BlockingDialog } from "@/components/ui/BlockingDialog";

export default function Home() {
  // Get user info and update function from context
  const { userInfo, saveUserInfo } = useUserInfoContext();
  // Controls whether the update dialog is shown
  const [showDialog, setShowDialog] = useState(false);

  // When user updates info in the dialog, save it and close dialog
  const handleUpdate = (info: { username: string; jobTitle: string }) => {
    saveUserInfo(info);
    setShowDialog(false);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Stack mb={4} gap={2} alignItems="center">
        <Text fontWeight="bold">Welcome: {userInfo?.username}</Text>
        <Text></Text>
        <Text>Job Title: {userInfo?.jobTitle}</Text>
        <Button colorScheme="teal" onClick={() => setShowDialog(true)}>
          Update User Information
        </Button>
      </Stack>
      {/* Dialog for updating user info, only shown when showDialog is true */}
      <BlockingDialog
        isOpen={showDialog}
        onSave={handleUpdate}
        onClose={() => setShowDialog(false)}
      />
    </main>
  );
}
