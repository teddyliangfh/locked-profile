"use client";
import { Button, Text, Stack, Box } from "@chakra-ui/react";
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="transparent"
    >
      <Box
        bg="rgba(17, 24, 39, 0.8)"
        backdropFilter="blur(10px)"
        borderRadius="xl"
        border="1px"
        borderColor="cyan.400"
        boxShadow="0 0 30px rgba(34, 211, 238, 0.3)"
        p={8}
        maxW="500px"
        w="100%"
        mx={4}
      >
        <Stack mb={6} gap={4} alignItems="center">
          <Text 
            fontWeight="bold" 
            fontSize="2xl"
            color="cyan.300" 
            _dark={{ color: "cyan.300" }}
            textShadow="0 0 10px rgba(34, 211, 238, 0.5)"
          >
            Welcome: {userInfo?.username}
          </Text>
          <Text 
            fontSize="lg"
            color="cyan.200" 
            _dark={{ color: "cyan.200" }}
          >
            Job Title: {userInfo?.jobTitle}
          </Text>
          <Button 
            colorScheme="cyan" 
            variant="outline"
            size="lg"
            onClick={() => setShowDialog(true)}
            _hover={{
              bg: "cyan.500",
              color: "gray.900",
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
              transform: "translateY(-2px)"
            }}
            transition="all 0.3s ease"
            borderWidth="2px"
            borderColor="cyan.400"
          >
            Update User Information
          </Button>
        </Stack>
      </Box>
      {/* Dialog for updating user info, only shown when showDialog is true */}
      <BlockingDialog
        isOpen={showDialog}
        onSave={handleUpdate}
        onClose={() => setShowDialog(false)}
      />
    </Box>
  );
}
