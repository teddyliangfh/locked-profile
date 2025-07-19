import { useState } from "react";
import { SimpleGrid, Box, Spinner, Text, ButtonGroup, IconButton, Stack, Pagination, HStack, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/ColorMode";
import { ProfileCard } from "./ProfileCard";
import { ProfileCardModal } from "./ProfileCardModal";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// Define the character type for type safety
export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
}

interface ProfileListProps {
  characters: Character[];
  loading: boolean;
  error: unknown;
  totalCount: number;
  page: number;
  onPageChange?: (page: number) => void;
}


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
            Please try refreshing the page.
          </Text>
        </Stack>
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
              <ButtonGroup variant="ghost" size="md" gap={2}>
                <Pagination.PrevTrigger asChild>
                  <IconButton 
                    aria-label="Previous page"
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
                    <HiChevronLeft />
                  </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                  render={(pageObj) => (
                    <IconButton
                      key={pageObj.value}
                      aria-label={`Page ${pageObj.value}`}
                      variant={pageObj.value === page ? "solid" : "outline"}
                      colorScheme="cyan"
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