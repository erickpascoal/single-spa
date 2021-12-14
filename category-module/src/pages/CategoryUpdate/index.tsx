import { BasePage } from "../../components/BasePage";
import { CategoryForm } from "../../components/CategoryForm";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { FormFooter } from "../../components/FormFooter";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import React from "react";

export function CategoryUpdate() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  const methods = useForm();

  const [product, setCategory] = React.useState();

  React.useEffect(() => {
    api.get(`categories/${params.id}`).then(({ data }) => {
      setCategory(data);
    });
  }, []);

  function onSubmit(formData: CategoryForm) {
    console.log("data", formData);

    const data = {
      name: formData.name,
      code: formData.code,
    };

    api.put(`categories/${params.id}`, data).then(() => {
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
          <CategoryForm initialValues={product} />

          <FormFooter onCancel={handleGoBack} />
        </form>
      </FormProvider>
    </BasePage>
  );
}
