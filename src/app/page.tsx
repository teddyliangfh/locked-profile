"use client";
import { Button, Text, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useUserInfoContext } from "@/providers/UserInfoProvider";
import { BlockingDialog } from "@/components/BlockingDialog";
import { motion } from "framer-motion";

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
      {/* Rick Sanchez Easter Egg!  */}
      {userInfo?.username === "Rick Sanchez" && (
        <motion.div
          style={{
            position: "fixed",
            top: "80px",
            left: "50%",
            zIndex: 99999,
            width: "auto",
            overflow: "visible"
          }}
          initial={{ x: "-50%", rotate: -2 }}
          animate={{ x: "-50%", rotate: [2, -2, 2, -2, 0] }}
          transition={{ duration: 0.7, times: [0, 0.2, 0.4, 0.6, 1] }}
        >
          <Box
            display="flex"
            alignItems="center"
            bg="black"
            color="white"
            px={6}
            py={3}
            borderRadius="xl"
            boxShadow="xl"
            gap={3}
            position="relative"
            zIndex={1}
          >
            <Box as="span" fontSize="2xl" role="img" aria-label="rick">🧪</Box>
            <Text fontWeight="bold" fontSize="lg">
              Wubba Lubba Dub Dub! You found the Rick Sanchez Easter Egg!
            </Text>
          </Box>
        </motion.div>
      )}

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
            bg={"cyberpunk.gradientBluePurple"}
            color="cyberpunk.text"
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
