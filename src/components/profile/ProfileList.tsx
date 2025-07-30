import { useState } from "react";
import { SimpleGrid, Box, Spinner, Text, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/ColorMode";
import { ProfileCard } from "./ProfileCard";
import { ProfileCardModal } from "./ProfileCardModal";
import type { Character } from "@/types/character";

interface ProfileListProps {
  characters: Character[];
  loading: boolean;
  error: unknown;
}


/**
 * Renders a list of character profiles with modal details.
 *
 * Handles loading, error, and empty states. Displays a grid of `ProfileCard` components,
 * and allows users to click on a card to view more details in a modal (`ProfileCardModal`).
 * Focuses purely on displaying the character list and handling modal interactions.
 *
 * @param characters - Array of character objects to display.
 * @param loading - Boolean indicating if the data is currently loading.
 * @param error - Error object or string if loading failed.
 * @returns A React component displaying the character list and modal.
 */
export function ProfileList({
  characters,
  loading,
  error,
}: ProfileListProps) {
  // State for modal
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Color mode values for better light/dark mode support
  const accentColor = useColorModeValue("cyan.500", "cyberpunk.accent");

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="400px">
        <Stack align="center" gap={4}>
          <Spinner size="xl" color={accentColor} />
          <Text color={accentColor}>Loading characters...</Text>
        </Stack>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="400px">
        <Stack align="center" gap={4}>
          <Text color="red.400" fontSize="lg">Failed to load profiles.</Text>
          <Text color={accentColor} fontSize="sm">
            {typeof error === "string" ? error : (error instanceof Error ? error.message : "Unknown error.")}
          </Text>
          <Text color={accentColor} fontSize="sm">
            Please try refreshing the page or check your network connection.
          </Text>
        </Stack>
      </Box>
    );
  }

  if (!characters || characters.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="400px">
        <Text color={accentColor} fontSize="lg">No item found</Text>
      </Box>
    );
  }

  return (
    <>
      <Stack gap={8} align="center" w="100%">
        {/* Character Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          gap={8}
          py={4}
          px={4}
          w="100%"
          maxW="1400px"
          mx="auto"
        >
          {characters.map((character) => (
            <ProfileCard
              key={character.id}
              character={character}
              onClick={() => handleCardClick(character)}
            />
          ))}
        </SimpleGrid>
      </Stack>

      {/* Modal for displaying character details */}
      <ProfileCardModal
        character={selectedCharacter}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
} 