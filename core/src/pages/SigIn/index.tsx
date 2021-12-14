import { Box } from "@chakra-ui/layout";
import { Button, Flex, Input } from "@chakra-ui/react";
import { Controller, useForm as useHookForm } from "react-hook-form";
import { Logo } from "../../components/Logo";

export function SignIn() {
  const useForm = useHookForm();

  function onSubmit(data: any) {
    console.log(data);
    //@ts-ignore
    window.singleSpaNavigate("product");
  }

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Flex
        as="form"
        flexDirection="column"
        alignItems="center"
        gap={"1rem"}
        width="20rem"
        onSubmit={useForm.handleSubmit(onSubmit)}
      >
        <Logo color="blue.400" />
        <Controller
          name="email"
          rules={{ required: true }}
          control={useForm.control}
          render={({ field }) => <Input placeholder="E-mail" {...field} />}
        />

        <Controller
          name="password"
          rules={{ required: true }}
          control={useForm.control}
          render={({ field }) => (
            <Input placeholder="Senha" type="password" {...field} />
          )}
        />

        <Button
          type="submit"
          backgroundColor={"blue.400"}
          isFullWidth={true}
          _hover={{
            backgroundColor: "blue.500",
          }}
          color={"white"}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
