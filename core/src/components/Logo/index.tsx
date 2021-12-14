import { Heading } from "@chakra-ui/layout";

type LogoProps = {
  color?: "white" | "blue.400" | string;
};

export function Logo({ color = "white" }: LogoProps) {
  return (
    <Heading as="h1" color={color}>
      Logo
    </Heading>
  );
}
