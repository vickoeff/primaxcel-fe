import { Box, Container, Flex } from "@chakra-ui/react";

export const SectionB = (props) => {
  const { isReverse, img, imgWidth, content, customSize, ...rest } = props;

  const imgLocationStyle = {
    width: imgWidth ? imgWidth : "50%",
    bottom: 0,
    left: isReverse ? "unset" : 0,
    right: isReverse ? 0 : "unset",
    pos: "absolute",
  };

  return (
    <Box {...rest}>
      <Container maxW="container.xl">
        <Flex
          pos="relative"
          minH="2xl"
          flexDirection={isReverse ? "row-reverse" : null}
          alignItems="center"
        >
          <Box
            pos="relative"
            minW={customSize ? customSize[0] : "50%"}
            minH="2xl"
          ></Box>
          <Box {...imgLocationStyle}>{img}</Box>
          <Box maxW={customSize ? customSize[0] : "50%"}>{content}</Box>
        </Flex>
      </Container>
    </Box>
  );
};
