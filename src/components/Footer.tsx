import { Box, Text } from "@chakra-ui/react";

const FOOTER_HEIGHT = "48px";

export function Footer() {
  return (
    <Box
      as="footer"
      position="sticky"
      bottom={0}
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
  );
}
