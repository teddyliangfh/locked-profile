"use client";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/graphql/apolloClient";
import { Provider } from "@/components/ui/provider";

export function RootProvider({ children }: { children: React.ReactNode }) {
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      <Provider>{children}</Provider>
    </ApolloProvider>
  );
} 