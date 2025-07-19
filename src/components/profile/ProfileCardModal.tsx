import {
  Dialog,
  Portal,
  DialogBody,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogBackdrop,
  DialogPositioner,
  Image,
  Text,
  HStack,
  Badge,
  Box,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import type { Character } from "@/types/character";

interface ProfileCardModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

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
                  h={{ base: "120px", md: "200px" }}
                  mx={{ base: "auto", md: 0 }}
                  mb={{ base: 4, md: 0 }}
                  overflow="hidden"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.900"
                  p={{ base: 1, md: 2 }}
                  boxShadow="md"
                >
                  <Image
                    src={character.image}
                    alt={character.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
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
