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
          <DialogContent>
            {/* Header with title */}
            <DialogHeader>
              <DialogTitle> Please enter Your Info</DialogTitle>
            </DialogHeader>
            {/* Body with form fields */}
            <DialogBody>
              <Fieldset.Root>
                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Username</Field.Label>
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoFocus
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Job Title</Field.Label>
                    <Input
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </Field.Root>
                </Fieldset.Content>
              </Fieldset.Root>
              {error && <span style={{ color: "red" }}>{error}</span>}
            </DialogBody>
            {/* Footer with Save and optional Cancel buttons */}
            <DialogFooter>
            {onClose && (
              <Dialog.ActionTrigger asChild>
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
              )}
              <Button colorScheme="teal" onClick={handleSubmit}>
                Save
              </Button>
            
            </DialogFooter>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={handleClose}/>
            </Dialog.CloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog.Root>
  );
}
