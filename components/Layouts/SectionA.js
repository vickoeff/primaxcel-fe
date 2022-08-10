import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

export const SectionA = (props) => {
  const {
    isReverse,
    isFitContent,
    img,
    leftContent,
    rightContent,
    customSize,
    gap,
    alignItems,
    ...rest
  } = props;

  return (
    <Box {...rest} pos="relative">
      <Container maxW="container.xl">
        <Flex
          minH={isFitContent ? "unset" : "2xl"}
          flexDirection={isReverse ? "row-reverse" : null}
          alignItems={alignItems ? alignItems : "center"}
          gap={gap ? gap : "unset"}
        >
          <Box maxW={customSize ? customSize[0] : "50%"}>
            {img ? <Image src={img} alt={`image_${img}`} /> : leftContent}
          </Box>
          <Box maxW={customSize ? customSize[1] : "50%"}>{rightContent}</Box>
        </Flex>
      </Container>
    </Box>
  );
};
