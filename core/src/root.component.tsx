import { Router } from "./route";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./contexts/Auth";
export default function Root(props) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </AuthProvider>
  );
}
