import { BasePage } from "../../components/BasePage";
import { CategoryForm } from "../../components/CategoryForm";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import React from "react";
import { Button, Flex } from "@chakra-ui/react";

export function CategoryView() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  const methods = useForm();

  const [product, setCategory] = React.useState();

  React.useEffect(() => {
    api.get(`categories/${params.id}`).then(({ data }) => {
      setCategory(data);
    });
  }, []);

  function handleGoBack() {
    navigate("/");
  }

  return (
    <BasePage>
      <FormProvider {...methods}>
        <form>
          <CategoryForm initialValues={product} isDisabled />

          <Flex justifyContent={"center"} mt={"2rem"}>
            <Button
              type="button"
              backgroundColor={"gray.500"}
              _hover={{
                backgroundColor: "gray.600",
              }}
              color={"white"}
              onClick={handleGoBack}
            >
              Voltar
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </BasePage>
  );
}
