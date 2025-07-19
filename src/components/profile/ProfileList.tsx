import { useState } from "react";
import { SimpleGrid, Box, Spinner, Text, ButtonGroup, IconButton, Stack, Pagination, Heading, HStack, VStack } from "@chakra-ui/react";
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
          <Spinner size="xl" color="cyan.400" />
          <Text color="cyan.300" _dark={{ color: "cyan.300" }}>Loading characters...</Text>
        </Stack>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="400px">
        <Stack align="center" gap={4}>
          <Text color="red.400" fontSize="lg">Failed to load profiles.</Text>
          <Text color="cyan.300" _dark={{ color: "cyan.300" }} fontSize="sm">
            Please try refreshing the page.
          </Text>
        </Stack>
      </Box>
    );
  }

  const totalPages = Math.ceil(totalCount / 20);
  const startItem = (page - 1) * 20 + 1;
  const endItem = Math.min(page * 20, totalCount);

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

        {/* Pagination controls with page info */}
        {totalPages > 1 && (
          <Box 
            bg="rgba(17, 24, 39, 0.8)"
            _dark={{ bg: "rgba(17, 24, 39, 0.8)", borderColor: "cyan.400" }}
            borderRadius="xl"
            boxShadow="0 0 20px rgba(34, 211, 238, 0.3)"
            p={6}
            border="2px"
            borderColor="cyan.400"
            w="100%"
            maxW="600px"
            backdropFilter="blur(10px)"
          >
            <VStack gap={4}>
              {/* Page info */}
              <HStack justify="space-between" w="100%">
                <Text color="cyan.300" _dark={{ color: "cyan.300" }} fontSize="sm">
                  Showing {startItem}-{endItem} of {totalCount} characters
                </Text>
                <Text color="cyan.300" _dark={{ color: "cyan.300" }} fontSize="sm" fontWeight="medium">
                  Page {page} of {totalPages}
                </Text>
              </HStack>

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
                      borderColor="cyan.400"
                      _hover={{ 
                        bg: "cyan.500",
                        color: "gray.900",
                        boxShadow: "0 0 15px rgba(34, 211, 238, 0.6)",
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
                        colorScheme={pageObj.value === page ? "cyan" : "cyan"}
                        size="md"
                        borderColor="cyan.400"
                        _hover={{ 
                          bg: pageObj.value === page ? "cyan.500" : "cyan.500",
                          color: "gray.900",
                          boxShadow: "0 0 15px rgba(34, 211, 238, 0.6)",
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
                      borderColor="cyan.400"
                      _hover={{ 
                        bg: "cyan.500",
                        color: "gray.900",
                        boxShadow: "0 0 15px rgba(34, 211, 238, 0.6)",
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
          </Box>
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