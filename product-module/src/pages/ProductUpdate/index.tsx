import { BasePage } from "../../components/BasePage";
import { ProductForm } from "../../components/ProductForm";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { FormFooter } from "../../components/FormFooter";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import React from "react";

export function ProductUpdate() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  const methods = useForm();

  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    api.get(`products/${params.id}`).then(({ data }) => {
      setProduct(data);
    });
  }, []);

  function onSubmit(formData: ProductForm) {
    console.log("data", formData);

    const data = {
      name: formData.name,
      code: formData.code,
      price: Number(formData.price),
    };

    api.put(`products/${params.id}`, data).then(() => {
      handleGoBack();
    });
  }

  function handleGoBack() {
    navigate("/");
  }

  return (
    <BasePage>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ProductForm initialValues={product} />

          <FormFooter onCancel={handleGoBack} />
        </form>
      </FormProvider>
    </BasePage>
  );
}
