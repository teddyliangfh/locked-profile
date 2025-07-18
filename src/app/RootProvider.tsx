"use client";
import { Provider } from "@/components/ui/provider"

export function RootProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>
} 