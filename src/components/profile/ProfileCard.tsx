import { Box, Image, Text, VStack, Badge, HStack } from "@chakra-ui/react";
import type { Character } from "@/types/character";

interface ProfileCardProps {
  character: Character;
  onClick?: () => void;
}


/**
 * Renders a stylized profile card displaying character information.
 *
 * @param character - The character object containing details such as name, image, status, species, and id.
 * @param onClick - Callback function invoked when the card is clicked.
 *
 * The card includes:
 * - A status badge indicating if the character is "Alive" or not.
 * - An image with a hover effect and gradient overlay for readability.
 * - Character name, species, and ID displayed with themed styling.
 * - Interactive hover effects for visual feedback.
 */
export function ProfileCard({ character, onClick }: ProfileCardProps) {
  return (
    <Box
      borderWidth="0"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="cyberpunk.shadowSoft"
      bg="cyberpunk.cardBg"
      maxW="280px"
      w="100%"
      cursor="pointer"
      onClick={onClick}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        boxShadow: "0 0 0 2px #00FFC6, 0 0 16px 2px #00FFC6",
        transform: "translateY(-4px)",
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
          bg={
            character.status === "Alive" ? "green.300" : "red.300"
          }
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
          color="cyberpunk.accent"
          w="100%"
          textShadow="0 0 5px rgba(34, 211, 238, 0.3)"
        >
          {character.name}
        </Text>

        <HStack justify="space-between" w="100%" opacity={0.8}>
          <Text fontSize="sm" color="cyberpunk.textDim">
            Species
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="cyberpunk.text">
            {character.species}
          </Text>
        </HStack>

        <HStack justify="space-between" w="100%" opacity={0.8}>
          <Text fontSize="sm" color="cyberpunk.textDim">
            ID
          </Text>
          <Text fontSize="xs" color="cyberpunk.accent" fontFamily="mono">
            #{character.id}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
} 