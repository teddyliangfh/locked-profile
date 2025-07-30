"use client";

import { RootProvider } from "./RootProvider";
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { AuthGuard } from "@/components/AuthGuard";
import { ColorModeButton } from "@/components/ui/ColorMode";
import { usePathname } from "next/navigation";
const HEADER_HEIGHT = "64px";
const FOOTER_HEIGHT = "48px";

function NavigationLinks() {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home", accentColor: "rgba(34, 211, 238, 0.8)" },
    { href: "/ProfileList", label: "Profile List", accentColor: "rgba(162, 89, 247, 0.8)" }
  ];

  return (
    <>
      {links.map(({ href, label, accentColor }) => {
        const isActive = pathname === href;
        return (
          <ChakraLink
            key={href}
            as={Link}
            href={href}
            fontWeight={isActive ? "extrabold" : "bold"}
            color={isActive ? "cyberpunk.accent" : "cyberpunk.textDim"}
            textShadow={isActive ? `0 0 10px ${accentColor}` : undefined}
            _hover={{
              color: "cyberpunk.text",
              textShadow: `0 0 10px ${accentColor}`,
              textDecoration: "none"
            }}
            _focus={{ outline: "none", boxShadow: "none" }}
            _active={{ outline: "none", boxShadow: "none" }}
            transition="all 0.3s ease"
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </ChakraLink>
        );
      })}
    </>
  );
}

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
              bgGradient="cyberpunk.gradient"
            >
              {/* Header */}
              <Flex
                as="header"
                position="fixed"
                top={0}
                left={0}
                width="100%"
                height={HEADER_HEIGHT}
                bg="cyberpunk.headerBg"
                backdropFilter="blur(10px)"
                borderBottom="1px"
                borderColor="cyberpunk.border"
                boxShadow="cyberpunk.shadowSoft"
                zIndex={100}
                alignItems="center"
                px={6}
              >
                <Flex as="nav" gap={6}>
                  <NavigationLinks />
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
                bg="cyberpunk.headerBg"
                backdropFilter="blur(10px)"
                borderTop="1px"
                borderColor="cyberpunk.border"
                boxShadow="cyberpunk.shadowSoft"
                zIndex={100}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="sm" color="cyberpunk.accent">
                  Challenge version v3.5
                </Text>
              </Box>
            </Box>
          </AuthGuard>
        </RootProvider>
      </body>
    </html>
  );
}
