"use client";
import { Heading, Box, Spinner, Center } from "@chakra-ui/react";
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
        <Spinner size="xl" color="teal.500" />
      </Center>
    );
  }

  return (
    <Box py={8} px={4}>
      <Heading as="h1" size="lg" mb={4}>
        Profile List
      </Heading>
      {/* Pass all required props to ProfileList */}
      <ProfileList
        characters={characters}
        loading={loading}
        error={error}
        totalCount={totalCount}
        page={pageNumber}
        onPageChange={p => setQuery({ pageNumber: p })}
      />
    </Box>
  );
} 