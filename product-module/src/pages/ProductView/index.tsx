import { BasePage } from "../../components/BasePage";
import { ProductForm } from "../../components/ProductForm";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import React from "react";
import { Button, Flex } from "@chakra-ui/react";

export function ProductView() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  const methods = useForm();

  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    api.get(`products/${params.id}`).then(({ data }) => {
      setProduct(data);
    });
  }, []);

  function handleGoBack() {
    navigate("/");
  }

  return (
    <BasePage>
      <FormProvider {...methods}>
        <form>
          <ProductForm initialValues={product} isDisabled />

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
