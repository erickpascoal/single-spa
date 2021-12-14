import { ReactNode } from "react";
import { Container } from "../Container";

export type BasePageProps = {
  children: ReactNode;
};

export function BasePage({ children }: BasePageProps) {
  return <Container>{children}</Container>;
}
