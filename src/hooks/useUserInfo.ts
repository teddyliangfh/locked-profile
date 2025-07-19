import { useState, useEffect } from "react";

export interface UserInfo {
  username: string;
  jobTitle: string;
}

const STORAGE_KEY = "lockedview_userinfo";

/**
 * React hook for managing user information with localStorage persistence.
 *
 * - `userInfo` is `undefined` before loading, `null` if not found, or a `UserInfo` object if loaded.
 * - Reads from localStorage on mount (browser only).
 * - Provides methods to save or clear user info in both state and localStorage.
 *
 * @returns An object containing:
 *   - `userInfo`: The current user info (`UserInfo | null | undefined`)
 *   - `saveUserInfo`: Function to save user info to state and localStorage
 *   - `clearUserInfo`: Function to clear user info from state and localStorage
 */
export function useUserInfo() {
  // userInfo is undefined before loading, null if not found, or an object if loaded
  const [userInfo, setUserInfo] = useState<UserInfo | null | undefined>(undefined);

  useEffect(() => {
    // Only access localStorage in the browser (not during SSR)
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          setUserInfo(JSON.parse(stored)); // Set userInfo from localStorage if available
        } catch {
          setUserInfo(null); // If parsing fails, treat as no user info
        }
      } else {
        setUserInfo(null); // No user info found in localStorage
      }
    }
  }, []);

  // Save user info to both state and localStorage
  const saveUserInfo = (info: UserInfo) => {
    setUserInfo(info);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
    }
  };

  // Clear user info from both state and localStorage
  const clearUserInfo = () => {
    setUserInfo(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return { userInfo, saveUserInfo, clearUserInfo };
} 