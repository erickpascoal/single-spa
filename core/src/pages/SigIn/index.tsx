import { Box } from "@chakra-ui/layout";
import { Button, Flex, Input } from "@chakra-ui/react";
import { Controller, useForm as useHookForm } from "react-hook-form";
import { Logo } from "../../components/Logo";
import { useAuthContext } from "../../contexts/Auth";

type SigInForm = {
  login: string;
  password: string;
};

export function SignIn() {
  const useForm = useHookForm();
  const { setIsAuthenticated, setUser } = useAuthContext();

  function onSubmit(formData: SigInForm) {
    setUser({ name: formData.login });
    setIsAuthenticated(true);
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
          name="login"
          rules={{ required: true }}
          control={useForm.control}
          render={({ field }) => <Input placeholder="Login" {...field} />}
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
