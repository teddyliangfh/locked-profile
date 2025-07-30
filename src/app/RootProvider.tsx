"use client";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/graphql/apolloClient";
import { UIProvider } from "@/providers/UIProvider";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={apolloClient}>
      <UIProvider>{children}</UIProvider>
    </ApolloProvider>
  );
} 