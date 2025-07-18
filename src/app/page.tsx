"use client";
import { Button, Heading, Box, Text, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCharacters } from "@/hooks/useCharacters";
import { useUserInfoContext } from "@/providers/UserInfoProvider";
import { BlockingDialog } from "@/components/ui/BlockingDialog";

export default function Home() {
  // Load character data (not security-critical)
  const { characters, loading, error, raw } = useCharacters(1);
  // Get user info and update function from context
  const { userInfo, saveUserInfo } = useUserInfoContext();
  // Controls whether the update dialog is shown
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      console.log("Characters:", characters);
      console.log("Raw data:", raw);
    }
    if (error) {
      console.error("Error fetching characters:", error);
    }
  }, [characters, loading, error, raw]);

  // When user updates info in the dialog, save it and close dialog
  const handleUpdate = (info: { username: string; jobTitle: string }) => {
    saveUserInfo(info);
    setShowDialog(false);
  };

  // Main page content, only visible if userInfo is present
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
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

