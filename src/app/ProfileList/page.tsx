"use client";
import { Box, Spinner, Center, Container, Text, VStack } from "@chakra-ui/react";
import { ProfileList } from "@/components/profile/ProfileList";
import { Pagination } from "@/components/ui/Pagination";
import { useUrlQueryState } from "@/hooks/useUrlQueryState";
import { useCharacters } from "@/hooks/useCharacters";

export default function ProfileListPage() {
  // Use the custom hook to get pageNumber and setQuery (URL is the single source of truth)
  const { pageNumber, setQuery } = useUrlQueryState();
  // Fetch data for the current page
  const { characters, loading, error, totalCount } = useCharacters(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(totalCount / 20);

  // Handle page change
  const handlePageChange = (page: number) => {
    setQuery({ pageNumber: page });
  };

  // Show a centered spinner when loading (centered in the viewport)
  if (loading) {
    return (
      <Center minH="100vh">
        <Box textAlign="center">
          <Spinner size="xl" color="cyberpunk.accent" mb={4} />
          <Text color="cyberpunk.accent" fontSize="lg">
            Loading character profiles...
          </Text>
        </Box>
      </Center>
    );
  }

  return (
    <Container maxW="100%">
      <Box py={8} px={4}>
        {/* Header Section */}
        <Box mb={8} textAlign="left">
          <Text
            fontWeight={500}
            fontSize="lg"
            maxW="600px"
            color="transparent"
            bg={"cyberpunk.gradientBluePurple"}
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Character Profiles
          </Text>
        </Box>

        {/* Content with Pagination */}
        <VStack gap={8} align="center" w="100%">
          {/* Profile List Component */}
          <ProfileList
            characters={characters}
            loading={loading}
            error={error}
          />

          {/* Pagination Component */}
          <Pagination
            currentPage={pageNumber}
            totalPages={totalPages}
            totalCount={totalCount}
            onPageChange={handlePageChange}
          />
        </VStack>
      </Box>
    </Container>
  );
}
