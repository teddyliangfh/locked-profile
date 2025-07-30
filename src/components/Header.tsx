"use client";

import { Flex, Link as ChakraLink, Box } from "@chakra-ui/react";
import Link from "next/link";
import { ColorModeButton } from "@/components/ui/ColorMode";
import { usePathname } from "next/navigation";

const HEADER_HEIGHT = "64px";

function NavigationLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", accentColor: "rgba(34, 211, 238, 0.8)" },
    {
      href: "/ProfileList",
      label: "Profile List",
      accentColor: "rgba(162, 89, 247, 0.8)",
    },
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
              textDecoration: "none",
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

export function Header() {
  return (
    <Flex
      as="header"
      position="sticky"
      top={0}
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
  );
}
