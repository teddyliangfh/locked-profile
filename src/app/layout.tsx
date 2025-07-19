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
import { ColorModeButton } from "@/components/ui/ColorMode";
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
            <Box 
              minH="100vh" 
              bgGradient="linear(to-b, gray.900, blue.900)"
              _dark={{ bgGradient: "linear(to-b, gray.900, blue.900)" }}
            >
              {/* Header */}
              <Flex
                as="header"
                position="fixed"
                top={0}
                left={0}
                width="100%"
                height={HEADER_HEIGHT}
                bg="rgba(17, 24, 39, 0.95)"
                _dark={{ bg: "rgba(17, 24, 39, 0.95)" }}
                backdropFilter="blur(10px)"
                borderBottom="1px"
                borderColor="cyan.400"
                boxShadow="0 0 20px rgba(34, 211, 238, 0.3)"
                zIndex={100}
                alignItems="center"
                px={6}
              >
                <Flex as="nav" gap={6}>
                  <ChakraLink
                    as={Link}
                    href="/"
                    fontWeight="bold"
                    color="cyan.300"
                    _dark={{ color: "cyan.300" }}
                    _hover={{ 
                      color: "cyan.100",
                      textShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
                      textDecoration: "none"
                    }}
                    transition="all 0.3s ease"
                  >
                    Home
                  </ChakraLink>
                  <ChakraLink
                    as={Link}
                    href="/ProfileList"
                    fontWeight="bold"
                    color="cyan.300"
                    _dark={{ color: "cyan.300" }}
                    _hover={{ 
                      color: "cyan.100",
                      textShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
                      textDecoration: "none"
                    }}
                    transition="all 0.3s ease"
                  >
                    ProfileList
                  </ChakraLink>
                </Flex>
                <Box flex="1" />
                <ColorModeButton />
              </Flex>

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

              {/* Footer */}
              <Box
                as="footer"
                position="fixed"
                bottom={0}
                left={0}
                width="100%"
                height={FOOTER_HEIGHT}
                bg="rgba(17, 24, 39, 0.95)"
                _dark={{ bg: "rgba(17, 24, 39, 0.95)" }}
                backdropFilter="blur(10px)"
                borderTop="1px"
                borderColor="cyan.400"
                boxShadow="0 0 20px rgba(34, 211, 238, 0.3)"
                zIndex={100}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="sm" color="cyan.400" _dark={{ color: "cyan.400" }}>
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
