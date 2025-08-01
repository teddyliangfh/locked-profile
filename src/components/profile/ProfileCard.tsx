import { Box,Text, VStack, Badge, HStack } from "@chakra-ui/react";
import type { Character } from "@/types/character";
import { SkeletonImage } from "@/components/ui/SkeletonImage";

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
      <Box position="relative" overflow="hidden" w="100%" h="200px">
        <SkeletonImage
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          objectFit="cover"
          style={{ width: "100%", height: "200px" }}
          sizes="(max-width: 300px) 100vw, 300px"
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
      <VStack
        p={4}
        gap={2}
        align="stretch"
        bg="cyberpunk.cardBg"
        backdropFilter="blur(10px)"
      >
        <Box>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="cyberpunk.text"
            mb={1}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {character.name}
          </Text>
          <Text
            fontSize="sm"
            color="cyberpunk.textDim"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {character.species}
          </Text>
        </Box>
        <HStack justify="space-between" align="center">
          <Text
            fontSize="xs"
            color="cyberpunk.accent"
            fontFamily="mono"
          >
            #{character.id}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
} 