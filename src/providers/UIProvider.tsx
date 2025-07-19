"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "../components/ui/ColorMode"
import { cyberpunkSystem } from "../theme/cyberpunk"

export function UIProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={cyberpunkSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
