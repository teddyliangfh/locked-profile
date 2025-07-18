import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

// Hook: useUrlQueryState
// - Returns { pageNumber, setQuery }
// - pageNumber is always a number (default 1 if not in URL or invalid)
// - setQuery({ pageNumber }) updates the URL (accepts string or number)
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