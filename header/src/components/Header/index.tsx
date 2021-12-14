import {
  Menu,
  MenuButton,
  Flex,
  Box,
  Avatar,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export function Header() {
  return (
    <Box backgroundColor={"blue.500"} p={4}>
      <Flex justifyContent={"space-between"}>
        <div>{/* logo aqui */}</div>
        <Menu>
          <MenuButton>
            <Avatar
              name="EPS"
              bgColor={"orange.400"}
              title="Erick Pascoal"
            ></Avatar>
          </MenuButton>
          <MenuList>
            <MenuItem>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
