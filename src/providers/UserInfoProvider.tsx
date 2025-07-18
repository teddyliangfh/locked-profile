"use client";
import React, { createContext, useContext } from "react";
import { useUserInfo, UserInfo } from "../hooks/useUserInfo";

interface UserInfoContextType {
  userInfo: UserInfo | null | undefined;
  saveUserInfo: (info: UserInfo) => void;
  clearUserInfo: () => void;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export function UserInfoProvider({ children }: { children: React.ReactNode }) {
  const { userInfo, saveUserInfo, clearUserInfo } = useUserInfo();
  return (
    <UserInfoContext.Provider value={{ userInfo, saveUserInfo, clearUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export function useUserInfoContext() {
  const ctx = useContext(UserInfoContext);
  if (!ctx)
    throw new Error("useUserInfoContext must be used within UserInfoProvider");
  return ctx;
}
