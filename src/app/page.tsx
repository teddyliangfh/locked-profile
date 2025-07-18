"use client";
import { Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <Heading mb={4}>Welcome to Chakra UI + Next.js!</Heading>
      <Button colorScheme="teal">Chakra Button</Button>
    </main>
  );
}

