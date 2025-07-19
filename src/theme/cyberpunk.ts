import { defineConfig } from "@chakra-ui/react";

export const cyberpunkTokens =
  defineConfig({
    theme: {
      tokens: {
        colors: {
          cyberpunk: {
            bg: { value: "#0f172a" },
            cardBg: { value: "rgba(17,24,39,0.8)" },
            modalBg: { value: "rgba(17,24,39,0.95)" },
            headerBg: { value: "rgba(17,24,39,0.95)" },
            accent: { value: "#22d3ee" },
            accentPink: { value: "#f472b6" },
            accentPurple: { value: "#a78bfa" },
            border: { value: "#22d3ee" },
            borderDark: { value: "#0891b2" },
            text: { value: "#e0f2fe" },
            textDim: { value: "#67e8f9" },
          },
        },
        shadows: {
          neon: { value: "0 0 20px #22d3ee, 0 0 40px #a78bfa" },
          neonSoft: { value: "0 0 20px rgba(34, 211, 238, 0.3)" },
          neonStrong: { value: "0 0 30px rgba(34, 211, 238, 0.4)" },
        },
        gradients: {
          cyberpunk: {
            gradient: { value: "linear(to-b, gray.900, blue.900)" },
            gradientText: { value: "linear(to-r, cyan.400, blue.400, purple.400)" },
          },
        },
      },
    },
  }).theme?.tokens ?? {};