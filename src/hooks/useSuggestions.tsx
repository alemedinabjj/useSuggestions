import { useState, useEffect } from "react";
import { data } from "../data/data.js";

type UseSuggestionsProps = {
  query: string;
  delay?: number;
};

export function useSuggestions({ query, delay = 500 }: UseSuggestionsProps) {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    let timeoutId: any;

    const fetchSuggestions = () => {
      setLoading(true);

      const filteredData = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );

      setSuggestions(filteredData);
      setLoading(false);
    };

    if (query.length > 0) {
      timeoutId = setTimeout(fetchSuggestions, delay);
    } else {
      setSuggestions([]);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [query, delay]);

  return { loading, suggestions };
}
