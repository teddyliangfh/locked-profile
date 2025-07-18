"use client";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/graphql/apolloClient";
import { UIProvider } from "@/providers/UIProvider";

export function RootProvider({ children }: { children: React.ReactNode }) {
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      <UIProvider>{children}</UIProvider>
    </ApolloProvider>
  );
} 