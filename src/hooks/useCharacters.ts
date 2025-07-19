import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '@/graphql/queries';

/**
 * Custom React hook to fetch a paginated list of characters using a GraphQL query.
 *
 * @param page - The current page number to fetch.
 * @returns An object containing:
 *   - `characters`: The array of character results for the current page.
 *   - `loading`: Boolean indicating if the query is in progress.
 *   - `error`: Any error encountered during the query.
 *   - `currentPage`: The current page number.
 *   - `totalCount`: The total number of available characters.
 */
export function useCharacters(page: number) {
  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  // Extract pagination info from the query result
  const info = data?.characters?.info || {};
  const currentPage = page;
  const totalCount = info.count || 0;

  return {
    characters: data?.characters?.results || [],
    loading,
    error,
    currentPage, // current page number
    totalCount,  // total number of items
  };
} 