import { Container, Box, Flex, Button, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = (props) => {
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
          <Link href="/">
            <Box cursor="pointer">
              <Image src={logo} alt="Primaxcel_logo" />
            </Box>
          </Link>

          <HStack gap={6}>
            {links.map((link) => (
              <Link key={link.label} href={link.url}>
                <Button
                  as="a"
                  variant="link"
                  role="link"
                  fontWeight={400}
                  textColor="primaxDarkPurple"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
