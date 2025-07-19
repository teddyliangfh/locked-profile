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
          <Spinner size="xl" color="teal.500" mb={4} />
          <Text color="gray.600" _dark={{ color: "gray.300" }} fontSize="lg">
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
          <Heading 
            as="h1" 
            size="2xl" 
            mb={2}
            bgGradient="linear(to-r, teal.400, blue.500)"
            bgClip="text"
            fontWeight="bold"
          >
            Character Profiles
          </Heading>
          <Text 
            color="gray.600" 
            _dark={{ color: "gray.300" }} 
            fontSize="lg"
            maxW="600px"
            mx="auto"
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