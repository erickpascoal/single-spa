import { BasePage } from "../../components/BasePage";
import { CategoryForm } from "../../components/CategoryForm";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { FormFooter } from "../../components/FormFooter";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function CategoryCreate() {
  const navigate = useNavigate();
  const methods = useForm();

  function handleGoBack() {
    navigate("/");
  }

  function onSubmit(formData: CategoryForm) {
    const data = {
      name: formData.name,
      code: formData.code,
    };

    api.post("categories", data).then(() => handleGoBack());
  }

  return (
    <BasePage>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CategoryForm />

          <FormFooter onCancel={handleGoBack} textConfim="Cadastrar" />
        </form>
      </FormProvider>
    </BasePage>
  );
}
