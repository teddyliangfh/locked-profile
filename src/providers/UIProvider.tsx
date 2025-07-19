"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "../components/ui/ColorMode"
import { cyberpunkTokens } from "../theme/cyberpunk"

const mergedSystem = {
  ...defaultSystem,
  tokens: {
    ...defaultSystem.tokens,
    ...cyberpunkTokens,
  },
};

export function UIProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={mergedSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
