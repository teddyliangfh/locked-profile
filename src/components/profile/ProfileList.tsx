import { SimpleGrid, Box, Spinner, Text, ButtonGroup, IconButton, Stack, Pagination } from "@chakra-ui/react";
import { ProfileCard } from "./ProfileCard";
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
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="200px">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return <Text color="red.500">Failed to load profiles.</Text>;
  }

  return (
    <Stack gap={6} align="center">
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        gap={6}
        py={4}
        px={2}
        w="100%"
        maxW="1200px"
        mx="auto"
      >
        {characters.map((character) => (
          <ProfileCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
      {/* Pagination controls below the grid */}
      <Pagination.Root
        count={totalCount}
        page={page}
        pageSize={20}
        onPageChange={onPageChange ? (e) => onPageChange(e.page) : undefined}
      >
        <ButtonGroup variant="ghost" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton aria-label="Previous page">
              <HiChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(pageObj) => (
              <IconButton
                key={pageObj.value}
                aria-label={`Page ${pageObj.value}`}
                variant={pageObj.value === page ? "solid" : "ghost"}
                colorScheme={pageObj.value === page ? "teal" : undefined}
                onClick={() => onPageChange && onPageChange(pageObj.value)}
              >
                {pageObj.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton aria-label="Next page">
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  );
} 