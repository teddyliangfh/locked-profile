import { Box, Image, Text, VStack } from "@chakra-ui/react";

interface ProfileCardProps {
  character: {
    id: string;
    name: string;
    image: string;
    species: string;
    status: string;
  };
}

// ProfileCard displays a single character's info
export function ProfileCard({ character }: ProfileCardProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      bg="white"
      _dark={{ bg: "gray.800" }}
      maxW="220px"
      w="100%"
    >
      <Image src={character.image} alt={character.name} borderRadius="md" w="100%" h="180px" objectFit="cover" mb={3} />
      <VStack align="start" gap={1}>
        <Text fontWeight="bold" fontSize="lg">{character.name}</Text>
        <Text fontSize="sm" color="gray.500">Species: {character.species}</Text>
        <Text fontSize="sm" color={character.status === "Alive" ? "green.500" : "red.500"}>Status: {character.status}</Text>
      </VStack>
    </Box>
  );
} 