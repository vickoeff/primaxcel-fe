import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const CarouselItem = (props) => {
  const { img, label } = props;

  return (
    <Box bg="primaxWhite" maxW="336px" py={6} px={6} boxShadow="2xl">
      <Image src={img} alt={img} />
      <Text>{label}</Text>
    </Box>
  );
};

export default CarouselItem;
