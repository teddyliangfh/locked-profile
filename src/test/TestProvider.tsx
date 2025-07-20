import React from "react";
import { UIProvider } from "@/providers/UIProvider";
import { UserInfoProvider } from "@/providers/UserInfoProvider";

export function TestProvider({ children }: { children: React.ReactNode }) {
  return (
    <UIProvider>
      <UserInfoProvider>
        {children}
      </UserInfoProvider>
    </UIProvider>
  );
} 