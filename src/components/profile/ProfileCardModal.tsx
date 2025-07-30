import {
  Dialog,
  Portal,
  DialogBody,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogBackdrop,
  DialogPositioner,
  Text,
  HStack,
  Badge,
  Box,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import type { Character } from "@/types/character";
import { SkeletonImage } from "@/components/ui/SkeletonImage";

interface ProfileCardModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal component that displays detailed information about a character profile.
 *
 * @param character - The character object containing profile information to display. If not provided, the modal will not render.
 * @param isOpen - Boolean indicating whether the modal is open.
 * @param onClose - Callback function invoked when the modal is requested to close.
 *
 * The modal includes:
 * - Character image, name, ID, species, gender, and status.
 * - Styled layout with cyberpunk theme.
 * - Responsive design for different screen sizes.
 * - Close button and backdrop handling.
 */
export function ProfileCardModal({
  character,
  isOpen,
  onClose,
}: ProfileCardModalProps) {
  const handleOpenChange = (details: { open: boolean }) => {
    if (!details.open) onClose();
  };

  if (!character) return null;

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={handleOpenChange}
      placement="center"
    >
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent
            maxW="640px"
            w="50vw"
            borderRadius="lg"
            overflow="hidden"
            bg="cyberpunk.modalBg"
            border="2px"
            borderColor="cyberpunk.border"
            boxShadow="cyberpunk.shadowStrong"
            backdropFilter="blur(15px)"
          >
            <DialogHeader bg="cyberpunk.headerBg" mt={6} px={2} py={2}>
              <Box w="100%" textAlign="center">
                <DialogTitle
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color="cyberpunk.accent"
                >
                  {character.name}
                </DialogTitle>
              </Box>
            </DialogHeader>
            <DialogBody p={{ base: 4, md: 8 }}>
              <Box
                display={{ base: "block", md: "flex" }}
                gap={{ base: 4, md: 8 }}
                alignItems="center"
                w="100%"
                maxW="420px"
                mx="auto"
                py={{ base: 2, md: 4 }}
              >
                {/* image */}
                <Box
                  flexShrink={0}
                  w={{ base: "100%", md: "200px" }}
                  h={{ base: "150px", md: "200px" }}
                  mx={{ base: "auto", md: 0 }}
                  mb={{ base: 4, md: 0 }}
                  overflow="hidden"
                  borderRadius="lg"
                  border="2px"
                  borderColor="cyberpunk.border"
                  boxShadow="cyberpunk.shadowSoft"
                  bg="gray.900"
                  p={2}
                >
                  <SkeletonImage
                    src={character.image}
                    alt={character.name}
                    width={200}
                    height={200}
                    objectFit="cover"
                    borderRadius="md"
                    sizes="(max-width: 768px) 100vw, 200px"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                {/* info */}
                <VStack
                  gap={2}
                  p={{ base: 2, md: 4 }}
                  align="stretch"
                  flex={1}
                  minW={0}
                >
                  <Box>
                    <Text fontSize="xs" color="cyberpunk.accent" mb={0}>
                      Character ID
                    </Text>
                    <Text
                      fontSize="md"
                      fontFamily="mono"
                      fontWeight="semibold"
                      color="cyberpunk.accent"
                      truncate
                    >
                      #{character.id}
                    </Text>
                  </Box>
                  <Box
                    borderTop="1px"
                    borderColor="cyberpunk.borderDark"
                    pt={2}
                  />
                  <Box>
                    <Text fontSize="xs" color="cyberpunk.accent" mb={0}>
                      Species:
                    </Text>
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      color="cyberpunk.textDim"
                      truncate
                    >
                      {character.species}
                    </Text>
                  </Box>
                  <Box
                    borderTop="1px"
                    borderColor="cyberpunk.borderDark"
                    pt={2}
                  />
                  <Box>
                    <Text fontSize="xs" color="cyberpunk.accent" mb={0}>
                      Gender:
                    </Text>
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      color="cyberpunk.textDim"
                      truncate
                    >
                      {character.gender}
                    </Text>
                  </Box>
                  <Box
                    borderTop="1px"
                    borderColor="cyberpunk.borderDark"
                    pt={2}
                  />
                  <Box>
                    <Text fontSize="xs" color="cyberpunk.accent" mb={0}>
                      Status:
                    </Text>
                    <HStack>
                      <Badge
                        bg={
                          character.status === "Alive" ? "green.400" : "red.400"
                        }
                        color="white"
                        fontSize="sm"
                        px={2}
                        py={0.5}
                        borderRadius="md"
                      >
                        {character.status}
                      </Badge>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </DialogBody>
            <Dialog.CloseTrigger asChild>
              <CloseButton
                size="sm"
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
