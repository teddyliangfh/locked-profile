import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '@/graphql/queries';

export function useCharacters(page: number) {
  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  // Extract pagination info from the query result
  const info = data?.characters?.info || {};
  const currentPage = page;
  const totalCount = info.count || 0;

  // TODO: define data type in /types
  return {
    characters: data?.characters?.results || [],
    loading,
    error,
    currentPage, // current page number
    totalCount,  // total number of items
  };
} 