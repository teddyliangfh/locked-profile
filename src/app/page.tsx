"use client";
import { Button, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useCharacters } from "@/hooks/useCharacters";

export default function Home() {
  const { characters, loading, error, raw } = useCharacters(1);

  useEffect(() => {
    if (!loading && !error) {
      console.log("Characters:", characters);
      console.log("Raw data:", raw);
    }
    if (error) {
      console.error("Error fetching characters:", error);
    }
  }, [characters, loading, error, raw]);

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <Heading mb={4}>Welcome to Chakra UI + Next.js!</Heading>
      <Button colorScheme="teal">Chakra Button</Button>
    </main>
  );
}

