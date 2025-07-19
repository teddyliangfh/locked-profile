import { useState } from "react";
import {
  Dialog,
  Portal,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogBackdrop,
  DialogPositioner,
  IconButton,
  CloseButton,
  Text,
} from "@chakra-ui/react";

interface BlockingDialogProps {
  isOpen: boolean;
  onSave: (userInfo: { username: string; jobTitle: string }) => void;
  onClose?: () => void; // Optional close handler
}

export function BlockingDialog({
  isOpen,
  onSave,
  onClose,
}: BlockingDialogProps) {
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!username.trim() || !jobTitle.trim()) {
      setError("Please enter both username and job title.");
      return;
    }
    setError("");
    onSave({ username: username.trim(), jobTitle: jobTitle.trim() });
  };

  const handleClose = () => {
    setUsername("");
    setJobTitle("");
    setError("");
    console.log(onClose)
    if (onClose) {
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen}>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent
            bg="cyberpunk.modalBg"
            border="2px"
            borderColor="cyberpunk.border"
            boxShadow="cyberpunk.shadowStrong"
            backdropFilter="blur(15px)"
            borderRadius="xl"
          >
            {/* Header with title */}
            <DialogHeader bg="cyberpunk.headerBg">
              <DialogTitle 
                color="cyberpunk.accent" 
                textShadow="0 0 10px rgba(34, 211, 238, 0.5)"
              >
                Please enter Your Info
              </DialogTitle>
            </DialogHeader>
            {/* Body with form fields */}
            <DialogBody bg="cyberpunk.cardBg">
              <Fieldset.Root>
                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label color="cyberpunk.accent">Username</Field.Label>
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoFocus
                      bg="cyberpunk.bg"
                      borderColor="cyberpunk.borderDark"
                      _focus={{ borderColor: "cyberpunk.accent", boxShadow: "cyberpunk.shadowSoft" }}
                      color="cyberpunk.text"
                      _placeholder={{ color: "cyberpunk.borderDark" }}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label color="cyberpunk.accent">Job Title</Field.Label>
                    <Input
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      bg="cyberpunk.bg"
                      borderColor="cyberpunk.borderDark"
                      _focus={{ borderColor: "cyberpunk.accent", boxShadow: "cyberpunk.shadowSoft" }}
                      color="cyberpunk.text"
                      _placeholder={{ color: "cyberpunk.borderDark" }}
                    />
                  </Field.Root>
                </Fieldset.Content>
              </Fieldset.Root>
              {error && <Text color="red.400" fontSize="sm" mt={2}>{error}</Text>}
            </DialogBody>
            {/* Footer with Save and optional Cancel buttons */}
            <DialogFooter bg="cyberpunk.headerBg">
            {onClose && (
              <Dialog.ActionTrigger asChild>
                  <Button 
                    variant="outline" 
                    onClick={onClose}
                    colorScheme="cyan"
                    borderColor="cyberpunk.border"
                    color="cyberpunk.accent"
                    _hover={{ 
                      bg: "cyan.500",
                      color: "gray.900",
                      boxShadow: "cyberpunk.shadowStrong"
                    }}
                    transition="all 0.3s ease"
                  >
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
              )}
              <Button 
                colorScheme="cyan" 
                onClick={handleSubmit}
                bg="cyan.500"
                color="gray.900"
                _hover={{ 
                  bg: "cyan.400",
                  boxShadow: "cyberpunk.shadowStrong",
                  transform: "translateY(-1px)"
                }}
                transition="all 0.3s ease"
              >
                Save
              </Button>
            
            </DialogFooter>
            <Dialog.CloseTrigger asChild>
              <CloseButton 
                size="sm" 
                onClick={handleClose}
                color="cyberpunk.accent"
                _hover={{ color: "cyberpunk.text" }}
              />
            </Dialog.CloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog.Root>
  );
}
