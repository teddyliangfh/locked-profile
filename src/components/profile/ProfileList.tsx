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
          <Spinner size="xl" color="teal.500" />
          <Text color="gray.600" _dark={{ color: "gray.300" }}>Loading characters...</Text>
        </Stack>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="400px">
        <Stack align="center" gap={4}>
          <Text color="red.500" fontSize="lg">Failed to load profiles.</Text>
          <Text color="gray.600" _dark={{ color: "gray.300" }} fontSize="sm">
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

        {/* Pagination controls with page info */}
        {totalPages > 1 && (
          <Box 
            bg="white" 
            _dark={{ bg: "gray.800", borderColor: "gray.700" }}
            borderRadius="xl"
            boxShadow="sm"
            p={6}
            border="1px"
            borderColor="gray.200"
            w="100%"
            maxW="600px"
          >
            <VStack gap={4}>
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
                      colorScheme="teal"
                      variant="outline"
                      _hover={{ bg: "teal.50", _dark: { bg: "teal.900" } }}
                    >
                      <HiChevronLeft />
                    </IconButton>
                  </Pagination.PrevTrigger>

                  <Pagination.Items
                    render={(pageObj) => (
                      <IconButton
                        key={pageObj.value}
                        aria-label={`Page ${pageObj.value}`}
                        variant={pageObj.value === page ? "solid" : "ghost"}
                        colorScheme={pageObj.value === page ? "teal" : "gray"}
                        size="md"
                        _hover={{ 
                          bg: pageObj.value === page ? "teal.600" : "gray.100",
                          _dark: { bg: pageObj.value === page ? "teal.600" : "gray.700" }
                        }}
                      >
                        {pageObj.value}
                      </IconButton>
                    )}
                  />

                  <Pagination.NextTrigger asChild>
                    <IconButton 
                      aria-label="Next page"
                      colorScheme="teal"
                      variant="outline"
                      _hover={{ bg: "teal.50", _dark: { bg: "teal.900" } }}
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