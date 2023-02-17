import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { useSuggestions } from "./hooks/useSuggestions";
import { Home } from "./pages/Home";
import { theme } from "./themes/theme";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}
