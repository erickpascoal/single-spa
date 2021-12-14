import {
  Menu,
  MenuButton,
  Flex,
  Box,
  Avatar,
  MenuItem,
  MenuList,
  Heading,
} from "@chakra-ui/react";

export function Header() {
  return (
    <Box backgroundColor={"blue.500"} p={4}>
      <Flex justifyContent={"space-between"}>
        <Heading as="h1" color={"white"}>
          Logo
        </Heading>
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
