import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

export const SectionA = (props) => {
  const { isReverse, imgSrc, content, ...rest } = props;

  return (
    <Box {...rest}>
      <Container maxW="container.xl">
        <Flex
          minH="2xl"
          flexDirection={isReverse ? "row-reverse" : null}
          alignItems="center"
        >
          <Box maxW="50%">
            {imgSrc ? <Image src={imgSrc} alt={`image_${imgSrc}`} /> : null}
          </Box>
          <Box maxW="50%">{content}</Box>
        </Flex>
      </Container>
    </Box>
  );
};
