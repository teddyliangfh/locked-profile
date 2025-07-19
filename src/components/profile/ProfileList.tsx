import { useState } from "react";
import { SimpleGrid, Box, Spinner, Text, ButtonGroup, IconButton, Stack, Pagination, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/ColorMode";
import { ProfileCard } from "./ProfileCard";
import { ProfileCardModal } from "./ProfileCardModal";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import type { Character } from "@/types/character";

interface ProfileListProps {
  characters: Character[];
  loading: boolean;
  error: unknown;
  totalCount: number;
  page: number;
  onPageChange?: (page: number) => void;
}


/**
 * Renders a list of character profiles with pagination and modal details.
 *
 * Handles loading, error, and empty states. Displays a grid of `ProfileCard` components,
 * and allows users to click on a card to view more details in a modal (`ProfileCardModal`).
 * Includes pagination controls if there are multiple pages of results.
 *
 * @param characters - Array of character objects to display.
 * @param loading - Boolean indicating if the data is currently loading.
 * @param error - Error object or string if loading failed.
 * @param totalCount - Total number of characters available (for pagination).
 * @param page - Current page number (1-based).
 * @param onPageChange - Callback function invoked when the page changes.
 *
 * @returns A React component displaying the character list, pagination, and modal.
 */
export function ProfileList({
  characters,
  loading,
  error,
  totalCount,
  page,
  onPageChange,
}: ProfileListProps) {
  // State for modal
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Color mode values for better light/dark mode support
  const textColor = useColorModeValue("gray.700", "cyberpunk.text");
  const accentColor = useColorModeValue("cyan.500", "cyberpunk.accent");
  const borderColor = useColorModeValue("gray.200", "cyberpunk.border");
  const hoverBg = useColorModeValue("cyan.50", "cyan.500");
  const hoverColor = useColorModeValue("gray.900", "gray.900");

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

  const totalPages = Math.ceil(totalCount / 20);

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

        {totalPages > 1 && (
          <VStack gap={4} w="100%" maxW="600px" mx="auto" px={4}>
            {/* Pagination controls */}
            <Pagination.Root
              count={totalCount}
              page={page}
              pageSize={20}
              onPageChange={onPageChange ? (e) => onPageChange(e.page) : undefined}
            >
              <ButtonGroup
                variant="ghost"
                size={{ base: "sm", md: "md" }}
                gap={{ base: 1, md: 2 }}
                flexWrap="wrap"
                justifyContent="center"
              >
                <Pagination.PrevTrigger asChild>
                  <IconButton
                    aria-label="Previous page"
                    // colorScheme="cyan"
                    variant="outline"
                    borderColor={borderColor}
                    color={textColor}
                    _hover={{
                      bg: hoverBg,
                      color: hoverColor,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      transform: "translateY(-1px)"
                    }}
                    transition="all 0.3s ease"
                  >
                    <HiChevronLeft />
                  </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                  render={(pageObj) => (
                    <IconButton
                      key={pageObj.value}
                      aria-label={`Page ${pageObj.value}`}
                      variant={pageObj.value === page ? "solid" : "outline"}
                      // colorScheme="cyan"
                      size="md"
                      borderColor={borderColor}
                      color={pageObj.value === page ? "white" : textColor}
                      bg={pageObj.value === page ? "cyan.500" : "transparent"}
                      _hover={{
                        bg: pageObj.value === page ? "cyan.600" : hoverBg,
                        color: pageObj.value === page ? "white" : hoverColor,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        transform: "translateY(-1px)"
                      }}
                      transition="all 0.3s ease"
                    >
                      {pageObj.value}
                    </IconButton>
                  )}
                />

                <Pagination.NextTrigger asChild>
                  <IconButton
                    aria-label="Next page"
                    colorScheme="cyan"
                    variant="outline"
                    borderColor={borderColor}
                    color={textColor}
                    _hover={{
                      bg: hoverBg,
                      color: hoverColor,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      transform: "translateY(-1px)"
                    }}
                    transition="all 0.3s ease"
                  >
                    <HiChevronRight />
                  </IconButton>
                </Pagination.NextTrigger>
              </ButtonGroup>
            </Pagination.Root>
          </VStack>
        )}
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