import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./route";

export default function Root(props) {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}
