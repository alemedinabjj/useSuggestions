import React, { useState } from "react";
import { useSuggestions } from "../hooks/useSuggestions";
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Box,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

export function Home() {
  const [query, setQuery] = useState("");
  const { loading, suggestions } = useSuggestions({ query });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt="8"
    >
      <Box p={8}>
        <FormControl
          variant="floating"
          id="first-name"
          isRequired
          isInvalid={suggestions.length === 0}
        >
          <Input placeholder=" " value={query} onChange={handleInputChange} />
          <FormLabel bg="gray.900!important">Digite alguma fruta</FormLabel>
          <FormHelperText>
            {loading && <p>Carregando...</p>}
            {suggestions.length > 0
              ? `Você quis dizer: ${suggestions[0]}?`
              : "Nenhuma sugestão"}
          </FormHelperText>
          <FormErrorMessage>
            <span>Ops! Algo deu errado.</span>
          </FormErrorMessage>
        </FormControl>
      </Box>
    </Flex>
  );
}
