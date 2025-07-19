"use client";
import { Button, Text, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useUserInfoContext } from "@/providers/UserInfoProvider";
import { BlockingDialog } from "@/components/BlockingDialog";

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
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="transparent"
    >

        <Stack mb={6} gap={4} alignItems="center">
          <Text 
            fontWeight="bold" 
            fontSize="2xl"
            color="cyberpunk.accent" 
          >
            Welcome, {userInfo?.username}
          </Text>
          <Text 
            fontSize="lg"
            color="cyberpunk.textDim" 
          >
            Job Title: {userInfo?.jobTitle}
          </Text>
          <Button
            fontWeight={500}
            bg="linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%)"
            color="white"
            border="none"
            _hover={{
              filter: "brightness(1.1)",
              boxShadow: "0 0 16px 2px rgba(177,75,244,0.4)"
            }}
            transition="all 0.3s ease"
            borderRadius="md"
            size="lg"
            onClick={() => setShowDialog(true)}
          >
            Update User Information
          </Button>
        </Stack>
   
      {/* Dialog for updating user info, only shown when showDialog is true */}
      <BlockingDialog
        isOpen={showDialog}
        onSave={handleUpdate}
        onClose={() => setShowDialog(false)}
      />
    </Box>
  );
}
