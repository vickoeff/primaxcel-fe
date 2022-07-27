import { Container, Box, Flex, Button, HStack } from "@chakra-ui/react";
import Image from "next/image";

export const Navbar = (props) => {
  const { logo, links, ...rest } = props;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="full"
      bg="primaxWhite"
      boxShadow="lg"
      zIndex={1024}
      {...rest}
    >
      <Container maxW="container.xl" pt="5" pb="2">
        <Flex justifyContent="space-between">
          <Image src={logo} alt="Primaxcel_logo" />

          <HStack gap={6}>
            {links.map((link) => (
              <Button
                as="a"
                variant="link"
                key={link.label}
                role="link"
                fontWeight={400}
                textColor="primaxDarkPurple"
              >
                {link.label}
              </Button>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
