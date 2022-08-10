import {
  Container,
  Box,
  Text,
  Button,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { SectionA, SectionB, SectionC } from "../components/Layouts";
import CarouselItem from "../components/CarouselItem";
import Image from "next/image";
import { useForm } from "react-hook-form";

// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import static image
import TubeMockup from "../public/Tube-Mockup-Primaxcel.png";
import BeautySkinCare from "../public/beauty-skincare-products-bathroom.png";
import MockUpBottle from "../public/Mockup-Bottle-Primaxcel4.png";
import ModernBeauty from "../public/modern-beauty-products-different-recipients-composition.png";
import MinimalComposition from "../public/minimal-composition-beauty-products.png";
import NaturalSelfCare from "../public/front-view-natural-self-care-products-composition.png";
import SkincareBathroom from "../public/beauty-skincare-products-bathroom-2.png";
import WhiteFaceCream from "../public/white-face-cream-tube-beauty-product-2.png";
import TopViewHydro from "../public/top-view-hydro-alcoholic-gel-splashes-with-bottle-dispenser.png";

export default function Products() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  const formStyle = {
    backgroundColor: "primaxBlue",
    borderRadius: "0",
    border: "unset",
    marginBottom: "6",
  };

  const formLabelStyle = {
    fontSize: "xl",
    fontWeight: "bold",
  };

  return (
    <>
      <Box minH={100} bg="primaxWhite"></Box>
      <SectionB
        bg="primaxWhite"
        customSize={["60%", "40%"]}
        imgWidth="60%"
        img={
          <Box width="full" position="relative" left={0} zIndex={2}>
            <Image src={TubeMockup} alt={`image_${MockUpBottle}`} />
          </Box>
        }
        content={
          <Box width="full">
            <Text
              as="h1"
              fontSize="6xl"
              fontWeight={700}
              color="primaxDarkPurple"
            >
              Produk Kami
            </Text>
          </Box>
        }
      />

      <SectionA
        pt={8}
        customSize={["65%", "35%"]}
        alignItems="end"
        bg="primaxWhite"
        leftContent={
          <Box mr="6" maxW="60%" pb={24}>
            <Text as="h2" mb={6}>
              Face Care
            </Text>
            <Text as="p" mb={6}>
              Buat produk perawatan wajah sesuai yang anda inginkan dengan
              kualitas tinggi. Kami bisa membantu anda membuat rangkaian
              perawatan wajah sesuai keinginan anda, hingga siap dipasarkan.
              Dengan kualitas tinggi dan harga yang bisa bersaing.
            </Text>
            <Button as="a" variant="link" role="link">
              <Text as="p" fontWeight="semibold">
                Lebih lengkap...
              </Text>
            </Button>
          </Box>
        }
        rightContent={
          <>
            <Image src={BeautySkinCare} alt={`image_${ModernBeauty}`} />
          </>
        }
      />

      <SectionA
        mt="-8px"
        isFitContent
        bg="primaxLightBlue"
        customSize={["45%", "55%"]}
        alignItems="start"
        leftContent={
          <>
            <Image src={MinimalComposition} alt={`image_${ModernBeauty}`} />
          </>
        }
        rightContent={
          <Box pt={24} pl={24}>
            <Text as="h2" mb={6}>
              Hair & Body Care
            </Text>
            <Text as="p" mb={6}>
              Buat produk perawatan rambut & tubuh tubuh sesuai yang anda
              inginkan dengan kualitas tinggi. Kami bisa membantu anda membuat
              rangkaian perawatan rambut & tubuh sesuai keinginan anda, hingga
              siap dipasarkan. Dengan kualitas tinggi dan harga yang bisa
              bersaing.
            </Text>
            <Button as="a" variant="link" role="link">
              <Text as="p" fontWeight="semibold">
                Lebih lengkap...
              </Text>
            </Button>
          </Box>
        }
      />

      <SectionA
        mt="-8px"
        isFitContent
        customSize={["65%", "35%"]}
        alignItems="start"
        bg="primaxWhite"
        leftContent={
          <Box mr="6" maxW="60%" pt={24}>
            <Text as="h2" mb={6}>
              Produk Rumah Tangga
            </Text>
            <Text as="p" mb={6}>
              Buat produk rumah tangga sesuai yang anda inginkan untuk komersial
              maupun korporasi dengan kualitas tinggi. Kami bisa membantu anda
              membuat produk sesuai kebutuhan dengan kualitas tinggi.
            </Text>
            <Button as="a" variant="link" role="link">
              <Text as="p" fontWeight="semibold">
                Lebih lengkap...
              </Text>
            </Button>
          </Box>
        }
        rightContent={
          <>
            <Image src={NaturalSelfCare} alt={`image_${ModernBeauty}`} />
          </>
        }
      />

      <Box bg="primaxLightBlue" py={10} textAlign="center">
        <Container maxW="container.xl">
          <Text as="h2">Produk yang kami produksi</Text>

          <HStack justifyContent="space-between">
            <Box
              display="inline-block"
              my={8}
              bg="primaxBlue"
              minW="334px"
              py={8}
              px={6}
            >
              <Image src={SkincareBathroom} alt="skincare-bathroom" />
              <Text mt={4} textAlign="center">
                Minimum MOQ & Packaging
              </Text>
            </Box>

            <Box
              display="inline-block"
              my={8}
              bg="primaxBlue"
              minW="334px"
              py={8}
              px={6}
            >
              <Image src={WhiteFaceCream} alt="white-face-cream" />
              <Text mt={4} textAlign="center">
                Komposisi Produk & Hak Cipta
              </Text>
            </Box>

            <Box
              display="inline-block"
              my={8}
              bg="primaxBlue"
              minW="334px"
              py={8}
              px={6}
            >
              <Image src={TopViewHydro} alt="top-view-hydro" />
              <Text mt={4} textAlign="center">
                Lainnya
              </Text>
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
