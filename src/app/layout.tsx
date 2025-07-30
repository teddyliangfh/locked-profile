import { RootProvider } from "./RootProvider";
import { Box } from "@chakra-ui/react";
import { AuthGuard } from "@/components/AuthGuard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rick and Morty profile",
  description: "A Rick and Morty character profile list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
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
