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
            bg="rgba(17, 24, 39, 0.95)"
            _dark={{ bg: "rgba(17, 24, 39, 0.95)" }}
            border="2px"
            borderColor="cyan.400"
            boxShadow="0 0 30px rgba(34, 211, 238, 0.4)"
            backdropFilter="blur(15px)"
          >
            <DialogHeader bg="rgba(17, 24, 39, 0.9)" _dark={{ bg: "rgba(17, 24, 39, 0.9)" }} p={6}>
              <HStack justify="space-between" align="center">
                <DialogTitle 
                  fontSize="2xl" 
                  fontWeight="bold" 
                  color="cyan.300" 
                  _dark={{ color: "cyan.300" }}
                  textShadow="0 0 10px rgba(34, 211, 238, 0.5)"
                >
                  {character.name}
                </DialogTitle>
                <CloseButton 
                  size="lg" 
                  onClick={onClose}
                  color="cyan.400"
                  _hover={{ color: "cyan.200" }}
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
                    <Text fontSize="sm" color="cyan.400" _dark={{ color: "cyan.400" }} mb={1}>
                      Character ID
                    </Text>
                    <Text fontSize="lg" fontFamily="mono" fontWeight="semibold" color="cyan.300" _dark={{ color: "cyan.300" }}>
                      #{character.id}
                    </Text>
                  </Box>

                  <Box borderTop="1px" borderColor="cyan.600" _dark={{ borderColor: "cyan.600" }} pt={4} />

                  <Box>
                    <Text fontSize="sm" color="cyan.400" _dark={{ color: "cyan.400" }} mb={1}>
                      Species
                    </Text>
                    <Text fontSize="lg" fontWeight="medium" color="cyan.200" _dark={{ color: "cyan.200" }}>
                      {character.species}
                    </Text>
                  </Box>

                  <Box borderTop="1px" borderColor="cyan.600" _dark={{ borderColor: "cyan.600" }} pt={4} />

                  <Box>
                    <Text fontSize="sm" color="cyan.400" _dark={{ color: "cyan.400" }} mb={1}>
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
                      <Text fontSize="sm" color="cyan.300" _dark={{ color: "cyan.300" }}>
                        {character.status === "Alive" ? "Currently living" : "No longer with us"}
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Stack>
            </DialogBody>
            
            <DialogFooter bg="rgba(17, 24, 39, 0.9)" _dark={{ bg: "rgba(17, 24, 39, 0.9)" }} p={4}>
              <Text fontSize="sm" color="cyan.400" _dark={{ color: "cyan.400" }}>
                Click outside or press ESC to close
              </Text>
            </DialogFooter>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog.Root>
  );
} 