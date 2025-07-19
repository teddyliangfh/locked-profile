import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";


/**
 * Custom React hook for managing the `pageNumber` query parameter in the URL.
 *
 * - Reads the `pageNumber` from the URL's search parameters and returns it as a number.
 *   Defaults to `1` if the parameter is missing, invalid, or less than 1.
 * - Provides a `setQuery` function to update the `pageNumber` in the URL.
 *   - If `pageNumber` is set to `1` or an empty string, the parameter is removed from the URL.
 *   - Otherwise, the parameter is updated to the provided value.
 *
 * @returns An object containing:
 *   - `pageNumber`: The current page number from the URL (number).
 *   - `setQuery`: A function to update the `pageNumber` in the URL.
 */
export function useUrlQueryState() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get pageNumber from URL, convert to number, default to 1 if invalid
  const pageNumberRaw = searchParams.get("pageNumber");
  let pageNumber = Number(pageNumberRaw);
  if (!pageNumberRaw || isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
  }

  // setQuery: update pageNumber in the URL
  const setQuery = useCallback((update: { pageNumber?: string | number }) => {
    const params = new URLSearchParams(searchParams.toString());
    if (update.pageNumber !== undefined) {
      const value = String(update.pageNumber);
      if (value === "" || value === "1") {
        params.delete("pageNumber");
      } else {
        params.set("pageNumber", value);
      }
    }
    router.push(`?${params.toString()}`);
  }, [router, searchParams]);

  return { pageNumber, setQuery };
} 