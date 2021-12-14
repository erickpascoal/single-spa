import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
  Flex,
  Button,
  Menu,
  Avatar,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BasePage } from "../../components/BasePage";
import { api } from "../../services/api";

type Category = {
  id: number;
  name: string;
  code: string;
  price: number;
};

export function CategoryList() {
  const navigate = useNavigate();
  const [categories, setCategorys] = React.useState<Category[]>([]);

  function handleNavigate(path: string) {
    navigate(path);
  }

  React.useEffect(() => {
    api.get("categories").then(({ data }) => setCategorys(data));
  }, []);

  function handleDelete(id: number) {
    api.delete(`categories/${id}`).then(() => {
      const newCategorys = categories.filter((product) => product.id !== id);
      setCategorys(newCategorys);
    });
  }

  function handleGoToUpdate(id: number) {
    handleNavigate(`update/${id}`);
  }

  function handleGoToView(id: number) {
    handleNavigate(`view/${id}`);
  }

  return (
    <BasePage>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading as="h1" my={5} color={"gray.600"}>
          Categorias
        </Heading>

        <Button
          backgroundColor={"green.400"}
          _hover={{ backgroundColor: "green.500" }}
          color={"white"}
          onClick={() => handleNavigate("create")}
        >
          Adicionar
        </Button>
      </Flex>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Código</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.code}</Td>
              <Td width={"1%"} textAlign={"center"}>
                <Menu>
                  <MenuButton>...</MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleGoToUpdate(product.id)}>
                      Editar
                    </MenuItem>
                    <MenuItem onClick={() => handleGoToView(product.id)}>
                      Visualizar
                    </MenuItem>
                    <MenuItem onClick={() => handleDelete(product.id)}>
                      Excluir
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </BasePage>
  );
}
