import { useState } from "react";
import {
  Dialog,
  Portal,
  Button,
  Field,
  Fieldset,
  Input,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogBackdrop,
  DialogPositioner,
  CloseButton,
  Text,
} from "@chakra-ui/react";

interface BlockingDialogProps {
  isOpen: boolean;
  onSave: (userInfo: { username: string; jobTitle: string }) => void;
  onClose?: () => void; // Optional close handler
}

/**
 * A modal dialog component that prompts the user to enter a username and job title.
 * 
 * @param isOpen - Controls whether the dialog is open.
 * @param onSave - Callback invoked with the entered username and job title when the user clicks "Save".
 * @param onClose - Optional callback invoked when the dialog is closed or the user clicks "Cancel".
 * 
 * The dialog validates that both fields are filled before allowing submission.
 * Displays an error message if validation fails.
 * 
 * @example
 * <BlockingDialog
 *   isOpen={isDialogOpen}
 *   onSave={({ username, jobTitle }) => { ... }}
 *   onClose={() => setDialogOpen(false)}
 * />
 */
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
    if (onClose) {
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} placement="center">
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
            <DialogHeader
              px={{ base: 3, md: 5 }}
              py={{ base: 2, md: 3 }}
            >
              <DialogTitle color="cyberpunk.accent">
                Please enter your info
              </DialogTitle>
            </DialogHeader>
            {/* Body with form fields */}
            <DialogBody
              px={{ base: 3, md: 5 }}
              py={{ base: 3, md: 4 }}
            >
              <Fieldset.Root>
                <Fieldset.Content>
                  <Field.Root mb={{ base: 3, md: 4 }}>
                    <Field.Label fontSize="sm" mb={1}>
                      Username
                    </Field.Label>
                    <Input
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        if (error) setError("");
                      }}
                      autoFocus
                      size="sm"
                    />
                  </Field.Root>
                  <Field.Root mb={{ base: 3, md: 4 }}>
                    <Field.Label fontSize="sm" mb={1}>
                      Job Title
                    </Field.Label>
                    <Input
                      value={jobTitle}
                      onChange={(e) => {
                        setJobTitle(e.target.value);
                        if (error) setError("");
                      }}
                      size="sm"
                    />
                  </Field.Root>
                </Fieldset.Content>
              </Fieldset.Root>
              {error && (
                <Text color="red" fontSize="sm" mt={2} role="alert">
                  {error}
                </Text>
              )}
            </DialogBody>
            {/* Footer with Save and optional Cancel buttons */}
            <DialogFooter
              px={{ base: 3, md: 5 }}
              py={{ base: 3, md: 4 }}
              display="flex"
              justifyContent="center"
              gap={{ base: 2, md: 4 }}
              mt={{ base: 2, md: 3 }}
            >
              {onClose && (
                <Dialog.ActionTrigger asChild>
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    colorScheme="cyan"
                    borderColor="cyberpunk.border"
                    color="cyberpunk.accent"
                  >
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
              )}
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  onClick={handleSubmit}
                  color="cyberpunk.text"
                  bg="cyberpunk.gradientBluePurple"
                  _hover={{
                    transform: "translateY(-1px)",
                  }}
                >
                  Save
                </Button>
              </Dialog.ActionTrigger>
            </DialogFooter>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="sm"
                onClick={handleClose}
                color="cyberpunk.accent"
                _hover={{ color: "cyberpunk.text" }}
                aria-label="Close"
              />
            </Dialog.CloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog.Root>
  );
}
