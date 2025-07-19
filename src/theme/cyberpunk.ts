import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const cyberpunkConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        cyberpunk: {
          bg: { value: "#0A0F1C" }, // dark navy
          cardBg: { value: "#232946" }, // dark gray blue
          accent: { value: "#00FFC6" }, // mint green
          accentPurple: { value: "#A259F7" }, // neon purple
          accentPink: { value: "#FF4DDE" }, // bright pink
          accentBlue: { value: "#3EECFB" }, // bright blue
          border: { value: "#00FFC6" }, // mint green
          text: { value: "#E0F2FE" }, // light text
          textDim: { value: "#A3BFFA" }, // secondary text
          lime: { value: "#CFFF04" }, // lime
          cyan: { value: "#00F0FF" }, // cyan
          gradient: { value: "linear-gradient(90deg, #00FFC6 0%, #A259F7 50%, #FF4DDE 100%)" },
          gradientBluePurple: { value: "linear-gradient(90deg, #3EECFB 0%, #A259F7 100%)" },
        },
      },
      shadows: {
        neon: { value: "0 0 20px #00FFC6, 0 0 40px #A259F7" },
        neonSoft: { value: "0 0 20px rgba(0,255,198,0.3)" },
        neonStrong: { value: "0 0 30px rgba(162,89,247,0.4)" },
      },
    },
  },
});

export const cyberpunkSystem = createSystem(defaultConfig, cyberpunkConfig);