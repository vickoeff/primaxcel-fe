import { Container } from "@chakra-ui/react";

export const ContainerSection = (props) => {
  const { children, ...rest } = props;

  return (
    <Container maxW="8xl" padding={6} {...rest}>
      {children}
    </Container>
  );
};
