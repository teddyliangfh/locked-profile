import { Box, Image, Text, VStack, Badge, HStack } from "@chakra-ui/react";

interface ProfileCardProps {
  character: {
    id: string;
    name: string;
    image: string;
    species: string;
    status: string;
  };
  onClick?: () => void;
}

// ProfileCard displays a single character's info
export function ProfileCard({ character, onClick }: ProfileCardProps) {
  return (
    <Box
      borderWidth="2px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="0 0 20px rgba(34, 211, 238, 0.2)"
      bg="rgba(17, 24, 39, 0.8)"
      _dark={{ bg: "rgba(17, 24, 39, 0.8)", borderColor: "cyan.400" }}
      borderColor="cyan.400"
      maxW="280px"
      w="100%"
      cursor="pointer"
      onClick={onClick}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)",
        borderColor: "cyan.300",
      }}
      position="relative"
      backdropFilter="blur(10px)"
    >
      {/* Status badge overlay */}
      <Box
        position="absolute"
        top={3}
        right={3}
        zIndex={2}
      >
        <Badge
          colorScheme={character.status === "Alive" ? "green" : "red"}
          variant="solid"
          fontSize="xs"
          px={2}
          py={1}
          borderRadius="full"
          opacity={0.9}
          boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
        >
          {character.status}
        </Badge>
      </Box>

      {/* Image container */}
      <Box position="relative" overflow="hidden">
        <Image 
          src={character.image} 
          alt={character.name} 
          w="100%" 
          h="200px" 
          objectFit="cover"
          transition="transform 0.3s ease"
          _hover={{
            transform: "scale(1.05)"
          }}
        />
        {/* Gradient overlay for better text readability */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="60px"
          background="linear-gradient(transparent, rgba(17, 24, 39, 0.8))"
          opacity={0}
          _hover={{ opacity: 1 }}
          transition="opacity 0.3s ease"
        />
      </Box>

      {/* Content */}
      <VStack align="start" gap={2} p={4}>
        <Text 
          fontWeight="bold" 
          fontSize="lg" 
          color="cyan.300"
          _dark={{ color: "cyan.300" }}
          w="100%"
          textShadow="0 0 5px rgba(34, 211, 238, 0.3)"
        >
          {character.name}
        </Text>
        
        <HStack justify="space-between" w="100%" opacity={0.8}>
          <Text fontSize="sm" color="cyan.200" _dark={{ color: "cyan.200" }}>
            Species
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="cyan.100" _dark={{ color: "cyan.100" }}>
            {character.species}
          </Text>
        </HStack>

        <HStack justify="space-between" w="100%" opacity={0.8}>
          <Text fontSize="sm" color="cyan.200" _dark={{ color: "cyan.200" }}>
            ID
          </Text>
          <Text fontSize="xs" color="cyan.400" _dark={{ color: "cyan.400" }} fontFamily="mono">
            #{character.id}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
} 