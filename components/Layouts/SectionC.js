import { Box, Flex } from "@chakra-ui/react";

export const SectionC = (props) => {
  const { isReverse, leftContent, rightContent, customSize, ...rest } = props;

  return (
    <Box {...rest} pos="relative">
      <Flex flexDirection={isReverse ? "row-reverse" : null}>
        <Box w={customSize ? customSize[0] : "50%"}>{leftContent}</Box>
        <Box w={customSize ? customSize[1] : "50%"}>{rightContent}</Box>
      </Flex>
    </Box>
  );
};
