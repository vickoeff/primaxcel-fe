import { Box, Container, Flex } from "@chakra-ui/react";

export const SectionB = (props) => {
  const { isReverse, img, content, customSize, ...rest } = props;

  const imgLocationStyle = {
    bottom: 0,
    left: isReverse ? "unset" : 0,
    right: isReverse ? 0 : "unset",
    pos: "absolute",
  };

  return (
    <Box pos="relative" {...rest}>
      <Box {...imgLocationStyle}>{img}</Box>
      <Container maxW="container.xl">
        <Flex
          minH="2xl"
          flexDirection={isReverse ? "row-reverse" : null}
          alignItems="center"
        >
          <Box
            pos="relative"
            minW={customSize ? customSize[0] : "50%"}
            minH="2xl"
          ></Box>
          <Box maxW={customSize ? customSize[0] : "50%"}>{content}</Box>
        </Flex>
      </Container>
    </Box>
  );
};
