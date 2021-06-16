import { useState, useEffect } from "react";

export function useDebounce(value: string, delay: number): string {
   const [debounceValue, setDebounceValue] = useState<string>(() => value);

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebounceValue(value);
      }, delay);

      return () => {
         clearImmediate(handler);
      };
   }, []);

   return debounceValue;  
}