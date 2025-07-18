import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '@/graphql/queries';

export function useCharacters(page: number) {
  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  return {
    characters: data?.characters?.results || [],
    loading,
    error,
    raw: data,
  };
} 