import {
  Menu as ChakraMenu,
  MenuButton,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

export function Menu() {
  function handleNavigate(path: string) {
    //@ts-ignore
    window.singleSpaNavigate(path);
  }

  return (
    <Box p={4}>
      <Flex justifyContent={"space-between"}>
        <div></div>
        <ChakraMenu>
          <Flex gap={2} flexDirection={"column"} width={"100%"}>
            <MenuButton as={Button} onClick={() => handleNavigate("/product")}>
              Produtos
            </MenuButton>
            <MenuButton as={Button} onClick={() => handleNavigate("/category")}>
              Categorias
            </MenuButton>
          </Flex>
        </ChakraMenu>
      </Flex>
    </Box>
  );
}
