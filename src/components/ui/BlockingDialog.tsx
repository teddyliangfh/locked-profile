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
            bg="rgba(17, 24, 39, 0.95)"
            _dark={{ bg: "rgba(17, 24, 39, 0.95)" }}
            border="2px"
            borderColor="cyan.400"
            boxShadow="0 0 30px rgba(34, 211, 238, 0.4)"
            backdropFilter="blur(15px)"
            borderRadius="xl"
          >
            {/* Header with title */}
            <DialogHeader bg="rgba(17, 24, 39, 0.9)" _dark={{ bg: "rgba(17, 24, 39, 0.9)" }}>
              <DialogTitle 
                color="cyan.300" 
                _dark={{ color: "cyan.300" }}
                textShadow="0 0 10px rgba(34, 211, 238, 0.5)"
              >
                Please enter Your Info
              </DialogTitle>
            </DialogHeader>
            {/* Body with form fields */}
            <DialogBody bg="rgba(17, 24, 39, 0.8)" _dark={{ bg: "rgba(17, 24, 39, 0.8)" }}>
              <Fieldset.Root>
                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label color="cyan.400" _dark={{ color: "cyan.400" }}>Username</Field.Label>
                                          <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoFocus
                        bg="rgba(17, 24, 39, 0.6)"
                        borderColor="cyan.600"
                        _focus={{ borderColor: "cyan.400", boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)" }}
                        color="cyan.100"
                        _placeholder={{ color: "cyan.600" }}
                      />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label color="cyan.400" _dark={{ color: "cyan.400" }}>Job Title</Field.Label>
                                          <Input
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        bg="rgba(17, 24, 39, 0.6)"
                        borderColor="cyan.600"
                        _focus={{ borderColor: "cyan.400", boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)" }}
                        color="cyan.100"
                        _placeholder={{ color: "cyan.600" }}
                      />
                  </Field.Root>
                </Fieldset.Content>
              </Fieldset.Root>
              {error && <Text color="red.400" fontSize="sm" mt={2}>{error}</Text>}
            </DialogBody>
            {/* Footer with Save and optional Cancel buttons */}
            <DialogFooter bg="rgba(17, 24, 39, 0.9)" _dark={{ bg: "rgba(17, 24, 39, 0.9)" }}>
            {onClose && (
              <Dialog.ActionTrigger asChild>
                  <Button 
                    variant="outline" 
                    onClick={onClose}
                    colorScheme="cyan"
                    borderColor="cyan.400"
                    color="cyan.400"
                    _hover={{ 
                      bg: "cyan.500",
                      color: "gray.900",
                      boxShadow: "0 0 15px rgba(34, 211, 238, 0.6)"
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
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)",
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
                color="cyan.400"
                _hover={{ color: "cyan.200" }}
              />
            </Dialog.CloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog.Root>
  );
}
