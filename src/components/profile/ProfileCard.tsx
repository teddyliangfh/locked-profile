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
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="sm"
      bg="white"
      _dark={{ bg: "gray.800", borderColor: "gray.700" }}
      maxW="280px"
      w="100%"
      cursor="pointer"
      onClick={onClick}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: "teal.300",
      }}
      position="relative"
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
          background="linear-gradient(transparent, rgba(0,0,0,0.7))"
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
          color="gray.800"
          _dark={{ color: "white" }}
          w="100%"
        >
          {character.name}
        </Text>
        
        <HStack justify="space-between" w="100%" opacity={0.8}>
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
            Species
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="gray.800" _dark={{ color: "white" }}>
            {character.species}
          </Text>
        </HStack>

        <HStack justify="space-between" w="100%" opacity={0.8}>
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
            ID
          </Text>
          <Text fontSize="xs" color="gray.500" _dark={{ color: "gray.400" }} fontFamily="mono">
            #{character.id}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
} 