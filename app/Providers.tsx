"use client";

import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react'

// created an auth provider wrapper so next-auth functions can be used globally
export const AuthProvider = ({ children }) => {
  return <ChakraProvider><SessionProvider>{children}</SessionProvider></ChakraProvider>;
};
