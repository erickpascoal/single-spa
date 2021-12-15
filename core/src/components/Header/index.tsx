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
import { useAuthContext } from "../../contexts/Auth";
import { Logo } from "../Logo";

export function Header() {
  const { user, loggout } = useAuthContext();

  return (
    <Box backgroundColor={"blue.500"} p={4}>
      <Flex justifyContent={"space-between"}>
        <Logo />
        <Menu>
          <MenuButton>
            <Avatar
              name={user.name.charAt(0)}
              bgColor={"orange.400"}
              title={user.name}
            ></Avatar>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={loggout}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
