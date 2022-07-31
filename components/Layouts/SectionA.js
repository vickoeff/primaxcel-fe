import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

export const SectionA = (props) => {
  const { isReverse, img, customImg, content, customSize, ...rest } = props;

  return (
    <Box {...rest} pos="relative">
      <Container maxW="container.xl">
        <Flex
          minH="2xl"
          flexDirection={isReverse ? "row-reverse" : null}
          alignItems="center"
        >
          <Box maxW={customSize ? customSize[0] : "50%"}>
            {img ? <Image src={img} alt={`image_${img}`} /> : customImg}
          </Box>
          <Box maxW={customSize ? customSize[1] : "50%"}>{content}</Box>
        </Flex>
      </Container>
    </Box>
  );
};
