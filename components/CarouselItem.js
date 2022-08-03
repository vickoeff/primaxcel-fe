import { Box, Divider, Text } from "@chakra-ui/react";
import Image from "next/image";

const CarouselItem = (props) => {
  const { img, label } = props;

  return (
    <Box
      display="inline-block"
      my={8}
      bg="primaxWhite"
      maxW="336px"
      py={6}
      px={6}
      boxShadow="4px 12px 5px #00000045"
    >
      <Image src={img} alt={img} />
      <Text mt={4} textAlign="center">
        {label}
      </Text>
    </Box>
  );
};

export default CarouselItem;
