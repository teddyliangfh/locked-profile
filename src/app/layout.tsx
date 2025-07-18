"use client";

import { RootProvider } from "./RootProvider";
import {
  Box,
  Flex,
  Container,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { AuthGuard } from "@/components/AuthGuard";
const HEADER_HEIGHT = "64px";
const FOOTER_HEIGHT = "48px";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <RootProvider>
          <AuthGuard>
            <Box minH="100vh" bg="gray.50">
              {/* 固定 Header */}
              <Box
                as="header"
                position="fixed"
                top={0}
                left={0}
                width="100%"
                height={HEADER_HEIGHT}
                bg="white"
                boxShadow="sm"
                zIndex={100}
                display="flex"
                alignItems="center"
                px={6}
              >
                <Text fontWeight="bold" mr={8}>
                  LockedView Header
                </Text>
                <Flex as="nav" gap={4}>
                  <ChakraLink
                    as={Link}
                    href="/"
                    fontWeight="medium"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Home
                  </ChakraLink>
                  <ChakraLink
                    as={Link}
                    href="/ProfileList"
                    fontWeight="medium"
                    _hover={{ textDecoration: "underline" }}
                  >
                    ProfileList
                  </ChakraLink>
                </Flex>
              </Box>

              {/* 主体内容区 */}
              <Box
                as="main"
                pt={HEADER_HEIGHT}
                pb={FOOTER_HEIGHT}
                px={2}
                maxW="container.lg"
                mx="auto"
                width="100%"
              >
                {children}
              </Box>

              {/* 固定 Footer */}
              <Box
                as="footer"
                position="fixed"
                bottom={0}
                left={0}
                width="100%"
                height={FOOTER_HEIGHT}
                bg="white"
                boxShadow="sm"
                zIndex={100}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="sm" color="gray.500">
                  challenge version v3.5
                </Text>
              </Box>
            </Box>
          </AuthGuard>
        </RootProvider>
      </body>
    </html>
  );
}
