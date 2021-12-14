import { BasePage } from "../../components/BasePage";
import { ProductForm } from "../../components/ProductForm";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { FormFooter } from "../../components/FormFooter";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function ProductCreate() {
  const navigate = useNavigate();
  const methods = useForm();

  function handleGoBack() {
    navigate("/");
  }

  function onSubmit(formData: ProductForm) {
    const data = {
      name: formData.name,
      code: formData.code,
      price: Number(formData.price),
    };

    api.post("products", data).then(() => handleGoBack());
  }

  return (
    <BasePage>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ProductForm />

          <FormFooter onCancel={handleGoBack} textConfim="Cadastrar" />
        </form>
      </FormProvider>
    </BasePage>
  );
}
