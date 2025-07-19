import {
  Dialog,
  Portal,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogBackdrop,
  DialogPositioner,
  Image,
  Text,
  Stack,
  HStack,
  Badge,
  Box,
  CloseButton,
  VStack,
} from "@chakra-ui/react";

interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
}

interface ProfileCardModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileCardModal({ character, isOpen, onClose }: ProfileCardModalProps) {
  if (!character) return null;

  return (
    <Dialog.Root open={isOpen}>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent 
            maxW="500px" 
            borderRadius="xl" 
            overflow="hidden"
            bg="cyberpunk.modalBg"
            border="2px"
            borderColor="cyberpunk.border"
            boxShadow="cyberpunk.shadowStrong"
            backdropFilter="blur(15px)"
          >
            <DialogHeader bg="cyberpunk.headerBg" p={6}>
              <HStack justify="space-between" align="center">
                <DialogTitle 
                  fontSize="2xl" 
                  fontWeight="bold" 
                  color="cyberpunk.accent" 
                  textShadow="0 0 10px rgba(34, 211, 238, 0.5)"
                >
                  {character.name}
                </DialogTitle>
                <CloseButton 
                  size="lg" 
                  onClick={onClose}
                  color="cyberpunk.accent"
                  _hover={{ color: "cyberpunk.text" }}
                />
              </HStack>
            </DialogHeader>
            
            <DialogBody p={0}>
              <Stack gap={0}>
                {/* Hero Image */}
                <Box position="relative" h="300px" overflow="hidden">
                  <Image
                    src={character.image}
                    alt={character.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                  {/* Status badge overlay */}
                  <Box
                    position="absolute"
                    top={4}
                    right={4}
                  >
                    <Badge
                      colorScheme={character.status === "Alive" ? "green" : "red"}
                      variant="solid"
                      fontSize="md"
                      px={4}
                      py={2}
                      borderRadius="full"
                      boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
                    >
                      {character.status}
                    </Badge>
                  </Box>
                </Box>

                {/* Character Details */}
                <VStack gap={4} p={6} align="stretch">
                  <Box>
                    <Text fontSize="sm" color="cyberpunk.accent" mb={1}>
                      Character ID
                    </Text>
                    <Text fontSize="lg" fontFamily="mono" fontWeight="semibold" color="cyberpunk.accent">
                      #{character.id}
                    </Text>
                  </Box>

                  <Box borderTop="1px" borderColor="cyberpunk.borderDark" pt={4} />

                  <Box>
                    <Text fontSize="sm" color="cyberpunk.accent" mb={1}>
                      Species
                    </Text>
                    <Text fontSize="lg" fontWeight="medium" color="cyberpunk.textDim">
                      {character.species}
                    </Text>
                  </Box>

                  <Box borderTop="1px" borderColor="cyberpunk.borderDark" pt={4} />

                  <Box>
                    <Text fontSize="sm" color="cyberpunk.accent" mb={1}>
                      Status
                    </Text>
                    <HStack>
                      <Badge
                        colorScheme={character.status === "Alive" ? "green" : "red"}
                        variant="subtle"
                        fontSize="md"
                        px={3}
                        py={1}
                        borderRadius="md"
                      >
                        {character.status}
                      </Badge>
                      <Text fontSize="sm" color="cyberpunk.accent">
                        {character.status === "Alive" ? "Currently living" : "No longer with us"}
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Stack>
            </DialogBody>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog.Root>
  );
} 