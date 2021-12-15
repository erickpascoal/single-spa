import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Parcel from "single-spa-react/parcel";
import { Header } from "../Header";
import { Menu } from "../Menu";

export type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Header />
      <Flex>
        <Box minW={"15rem"} minH={"calc(100vh - 8.5rem)"}>
          <Menu />
        </Box>
        <Box width={"100%"}> {children}</Box>
      </Flex>
      <Parcel config={() => System.import("@eps/footer")}></Parcel>
    </Box>
  );
}
