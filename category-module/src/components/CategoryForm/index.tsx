import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export type CategoryForm = {
  name: string;
  code: string;
  price: number;
};

type CategoryFormProps = {
  initialValues?: CategoryForm;
  isDisabled?: boolean;
};

export function CategoryForm({ initialValues, isDisabled }: CategoryFormProps) {
  const useForm = useFormContext();

  React.useEffect(() => {
    if (!!initialValues) {
      useForm.setValue("name", initialValues.name);
      useForm.setValue("code", initialValues.code);
    }
  }, [initialValues]);

  return (
    <Box>
      <Flex gap={"1rem"}>
        <Controller
          name="name"
          rules={{ required: true }}
          control={useForm.control}
          render={({ field }) => (
            <Input placeholder="Nome" {...field} disabled={isDisabled} />
          )}
        />

        <Controller
          name="code"
          rules={{ required: true }}
          control={useForm.control}
          render={({ field }) => (
            <Input placeholder="Código" {...field} disabled={isDisabled} />
          )}
        />
      </Flex>
    </Box>
  );
}
