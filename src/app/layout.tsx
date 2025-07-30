import { RootProvider } from "./RootProvider";
import { Box } from "@chakra-ui/react";
import { AuthGuard } from "@/components/AuthGuard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Rick and Morty profile",
  description: "A Rick and Morty character profile list",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <RootProvider>
          <AuthGuard>
            <Box
              minH="100vh"
              bgGradient="cyberpunk.gradient"
              display="flex"
              flexDirection="column"
            >
              <Header />

              <Box
                as="main"
                flex="1"
                px={2}
                maxW="container.lg"
                mx="auto"
                width="100%"
                py={4}
              >
                {children}
              </Box>

              <Footer />
            </Box>
          </AuthGuard>
        </RootProvider>
      </body>
    </html>
  );
}
