"use client";
import { Heading, Box, Spinner, Center, Container, Text, HStack } from "@chakra-ui/react";
import { ProfileList } from "@/components/profile/ProfileList";
import { useUrlQueryState } from "@/hooks/useUrlQueryState";
import { useCharacters } from "@/hooks/useCharacters";

export default function ProfileListPage() {
  // Use the custom hook to get pageNumber and setQuery (URL is the single source of truth)
  const { pageNumber, setQuery } = useUrlQueryState();
  // Fetch data for the current page
  const { characters, loading, error, totalCount } = useCharacters(pageNumber);

  // Show a centered spinner when loading (centered in the viewport)
  if (loading) {
    return (
      <Center minH="100vh">
        <Box textAlign="center">
          <Spinner size="xl" color="cyan.400" mb={4} />
          <Text color="cyan.300" _dark={{ color: "cyan.300" }} fontSize="lg">
            Loading character profiles...
          </Text>
        </Box>
      </Center>
    );
  }

  return (
    <Container maxW="100%" px={0}>
      <Box py={8} px={4}>
        {/* Header Section */}
        <Box mb={8} textAlign="center">

          <Text 
            color="cyan.200" 
            _dark={{ color: "cyan.200" }} 
            fontSize="lg"
            maxW="600px"
            mx="auto"
            textShadow="0 0 10px rgba(34, 211, 238, 0.3)"
          >
            Explore the diverse cast of characters from the Rick and Morty universe
          </Text>
        </Box>

        {/* Profile List Component */}
        <ProfileList
          characters={characters}
          loading={loading}
          error={error}
          totalCount={totalCount}
          page={pageNumber}
          onPageChange={p => setQuery({ pageNumber: p })}
        />
      </Box>
    </Container>
  );
} 