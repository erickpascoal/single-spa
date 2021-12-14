import { Router } from "./route";
import { ChakraProvider } from "@chakra-ui/react";
export default function Root(props) {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}
