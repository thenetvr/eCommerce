"use client";

import { SessionProvider } from "next-auth/react";

// created an auth provider wrapper so next-auth functions can be used globally
export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
