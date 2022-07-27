import { Box, Text } from "@chakra-ui/react";
import { SectionA, SectionB } from "../components/Layouts";
import Image from "next/image";
import cosmeticBottle from "../public/Cosmetic-Bottle-Mockups-Primaxcel_1.png";
import primaxLogoHD from "../public/Primaxcel-FullHD.png";
import MockUpBottle from "../public/Mockup-Bottle-Primaxcel4.png";

export default function Home() {
  return (
    <>
      <Box minH={200} bg="primaxLightBlue"></Box>
      <SectionB
        isReverse
        bg="primaxLightBlue"
        img={
          <Box>
            <Image
              src={MockUpBottle}
              alt={`image_${MockUpBottle}`}
              style={{ maxHeight: "100px" }}
            />
          </Box>
        }
        content={
          <>
            <Box>
              <Image src={primaxLogoHD} alt="Primaxcel_logo" />
            </Box>
            <Text
              as="p"
              textColor="primaxLightPurple"
              fontSize="30px"
              fontWeight={700}
              textAlign="justify"
            >
              Didirikan sebagai perusahaan produksi progresif, berfokus pada
              produksi kosmetik dan makanan sehat dengan kualitas terbaik dan
              sesuai standar Nasional & Internasional.
            </Text>
          </>
        }
      />
      <SectionA
        bg="primaxLightBlue"
        imgSrc={cosmeticBottle}
        content={
          <>
            <Text
              as="h2"
              textColor="primaxLightPurple"
              fontSize="5xl"
              fontWeight={800}
              mb={6}
            >
              Mengapa Kami
            </Text>
            <Text
              as="p"
              textColor="primaxLightPurple"
              fontSize="32px"
              fontWeight={400}
              textAlign="justify"
            >
              Primaxcel terstandarisasi dan tersertifikasi nasional maupun
              internasional, CPKB, SPP-IRT, GMP.
            </Text>
            <Text
              as="p"
              textColor="primaxLightPurple"
              fontSize="32px"
              fontWeight={400}
              textAlign="justify"
            >
              Kemudahan memperoleh sertifikasi BPOM & Halal untuk produk yang
              maklon di Primaxcel.
            </Text>
          </>
        }
      />
    </>
  );
}
