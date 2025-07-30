"use client";
import { ButtonGroup, IconButton, VStack } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Pagination as ChakraPagination } from "@chakra-ui/react";
import { useColorModeValue } from "./ColorMode";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
}

/**
 * Reusable pagination component
 * 
 * @example
 * ```tsx
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   totalCount={200}
 *   onPageChange={(page) => setPage(page)}
 * />
 * ```
 * 
 * @param currentPage - The current active page number
 * @param totalPages - Total number of pages
 * @param totalCount - Total number of items
 * @param pageSize - Number of items per page (default: 20)
 * @param onPageChange - Callback function when page changes
 */
export function Pagination({
  currentPage,
  totalPages,
  totalCount,
  pageSize = 20,
  onPageChange,
}: PaginationProps) {
  const textColor = useColorModeValue("gray.700", "cyberpunk.text");
  const borderColor = useColorModeValue("gray.200", "cyberpunk.border");
  const hoverBg = useColorModeValue("cyan.50", "cyan.500");
  const hoverColor = useColorModeValue("gray.900", "gray.900");

  // Don't render pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  return (
    <VStack gap={4} w="100%" maxW="600px" mx="auto" px={4}>
      <ChakraPagination.Root
        count={totalCount}
        page={currentPage}
        pageSize={pageSize}
        onPageChange={(e) => onPageChange(e.page)}
      >
        <ButtonGroup
          variant="ghost"
          size={{ base: "sm", md: "md" }}
          gap={{ base: 1, md: 2 }}
          flexWrap="wrap"
          justifyContent="center"
        >
          <ChakraPagination.PrevTrigger asChild>
            <IconButton
              aria-label="Previous page"
              variant="outline"
              borderColor={borderColor}
              color={textColor}
              _hover={{
                bg: hoverBg,
                color: hoverColor,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                transform: "translateY(-1px)"
              }}
              transition="all 0.3s ease"
            >
              <HiChevronLeft />
            </IconButton>
          </ChakraPagination.PrevTrigger>

          <ChakraPagination.Items
            render={(pageObj) => (
              <IconButton
                key={pageObj.value}
                aria-label={`Page ${pageObj.value}`}
                variant={pageObj.value === currentPage ? "solid" : "outline"}
                size="md"
                borderColor={borderColor}
                color={pageObj.value === currentPage ? "white" : textColor}
                bg={pageObj.value === currentPage ? "cyan.500" : "transparent"}
                _hover={{
                  bg: pageObj.value === currentPage ? "cyan.600" : hoverBg,
                  color: pageObj.value === currentPage ? "white" : hoverColor,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  transform: "translateY(-1px)"
                }}
                transition="all 0.3s ease"
              >
                {pageObj.value}
              </IconButton>
            )}
          />

          <ChakraPagination.NextTrigger asChild>
            <IconButton
              aria-label="Next page"
              variant="outline"
              borderColor={borderColor}
              color={textColor}
              _hover={{
                bg: hoverBg,
                color: hoverColor,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                transform: "translateY(-1px)"
              }}
              transition="all 0.3s ease"
            >
              <HiChevronRight />
            </IconButton>
          </ChakraPagination.NextTrigger>
        </ButtonGroup>
      </ChakraPagination.Root>
    </VStack>
  );
} 