import { Container, Box, Text, Button, HStack } from "@chakra-ui/react";
import { SectionA, SectionB } from "../components/Layouts";
import CarouselItem from "../components/CarouselItem";
import Image from "next/image";

// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import static image
import cosmeticBottle from "../public/Cosmetic-Bottle-Mockups-Primaxcel_1.png";
import primaxLogoHD from "../public/Primaxcel-FullHD.png";
import MockUpBottle from "../public/Mockup-Bottle-Primaxcel4.png";
import ModernBeauty from "../public/modern-beauty-products-different-recipients-composition.png";
import OilDropper from "../public/front-view-skin-oil-droppers-composition.png";
import skinCare from "../public/set-skin-care-package-design-resource.png";
import discuss from "../public/discuss.svg";
import money from "../public/money.svg";
import science from "../public/science.svg";
import shield from "../public/shield.svg";
import paper from "../public/paper.svg";
import HalalLogo from "../public/halal_logo.png";
import CpkbLogo from "../public/cpkb_logo.png";
import GMPLogo from "../public/GMP_logo.png";
import BPOMLogo from "../public/BPOM_logo.png";

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
            <Text as="p" fontWeight={700}>
              Didirikan sebagai perusahaan produksi progresif, berfokus pada
              produksi kosmetik dan makanan sehat dengan kualitas terbaik dan
              sesuai standar Nasional & Internasional.
            </Text>
          </>
        }
      />
      <SectionA
        bg="primaxLightBlue"
        img={cosmeticBottle}
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
            <Text as="p">
              Primaxcel menjamin kualitas dan keamanan produk serta sistem
              produksi. Dengan tim R&D (Riset & Developmen) yang berpengalaman,
              mesin produksi terbaik, serta proses dan QC (Quality Control) yang
              sesuai dengan standarisasi nasional maupun internasional.
            </Text>
            <Text as="p">
              Primaxcel telah terstandarisasi Nasional maupun Internasional,
              CPKB (Cara Pembuatan Kosmetik yang Baik), SPP-IRT (Sertifikat
              Produksi Pangan-Industri Rumah Tangga), GMP (Good Manufacturing
              Practice).
            </Text>
            <Text as="p">
              Jaminan memperoleh sertifikasi BPOM & Halal untuk produk yang
              maklon di Primaxcel.
            </Text>
          </>
        }
      />
      <SectionA
        bg="primaxLightWhite"
        customImg={
          <>
            <Box
              pos="absolute"
              top={0}
              left={0}
              w="50%"
              h="2xl"
              bg="primaxBlue"
            ></Box>
            <Box pos="relative">
              <Image src={ModernBeauty} alt={`image_${ModernBeauty}`} />
            </Box>
          </>
        }
        customSize={["65%", "35%"]}
        content={
          <Box ml="6">
            <Text
              as="h2"
              textColor="primaxLightPurple"
              fontSize="4xl"
              fontWeight={800}
              mb={6}
            >
              Maklon bersama kami
            </Text>
            <Text as="p">
              Anda memiliki ide bisnis?
              <br /> Bingung mulai bisnis dari mana?
            </Text>
            <Text as="p">
              Primaxcel bisa membantu anda mengubah ide kreatif yang anda miliki
              menjadi produk impian anda.
            </Text>
            <Text as="p">
              Dengan langkah-langkah dan komunikasi yang mudah. Wujudkan produk
              sesuai keinginan anda.
              <br />
              <br />
              Jangan ragu lagi
            </Text>
            <Button>Hubungi Kami</Button>
          </Box>
        }
      />
      <SectionA
        isReverse
        bg="primaxLightWhite"
        customImg={
          <>
            <Box pos="relative" pl="20">
              <Box
                pos="absolute"
                top={0}
                bottom={0}
                right={0}
                left={0}
                m="auto"
                w="115%"
                h="sm"
                bg="primaxBlue"
              ></Box>
              <Image src={OilDropper} alt={`image_${ModernBeauty}`} />
            </Box>
          </>
        }
        customSize={["65%", "35%"]}
        content={
          <Box mr="6">
            <Text
              as="h2"
              textColor="primaxLightPurple"
              fontSize="4xl"
              fontWeight={800}
              mb={6}
            >
              Mengenai Maklon
            </Text>
            <Text as="p">
              Maklon, terutama produk beauty berupa skincare menjadi bisnis yang
              berkembang pesat saat ini. Tingginya ketertarikan konsumen
              skincare yang terus meningkat, membuat kerjasama maklon menjadi
              pilihan yang cepat dan tepat untuk memulai maupun mengembangkan
              bisnis anda.
            </Text>
            <Text as="p">
              Dengan kemudahan pembuatan produk sesuai keinginan anda, Primaxcel
              juga bisa membantu anda mendesain produk dari nol hingga siap
              dipasarkan, dengan perizinan yang lengkap.
            </Text>
            <Text as="p">
              Primaxcel siap melayani anda maklon produk beauty, makanan sehat,
              serta kebutuhan rumah tangga, dengan kualitas tinggi dan harga
              bersaing.
            </Text>
          </Box>
        }
      />
      <Box py={10} bg="primaxLightBlue" textAlign="center">
        <Text
          as="h2"
          textColor="primaxDarkPurple"
          fontSize="4xl"
          fontWeight={800}
        >
          Produk yang kami produksi
        </Text>

        <Carousel
          centerMode
          autoPlay
          showIndicators={false}
          showArrows={false}
          swipeable
          infiniteLoop
          interval={1500}
        >
          <HStack gap={8}>
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
          </HStack>
          <HStack gap={8}>
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
          </HStack>
          <HStack gap={8}>
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
          </HStack>
          <HStack gap={8}>
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
            <CarouselItem img={skinCare} label="Lorem Ipsum" />
          </HStack>
        </Carousel>

        <Button py={8} px={14}>
          Cara Order
        </Button>
      </Box>

      <Box py={8}>
        <Container maxW="container.xl">
          <Text
            as="h2"
            textColor="primaxDarkPurple"
            textAlign="center"
            fontSize="4xl"
            fontWeight={800}
          >
            Mengapa Maklon Bersama Primaxcel?
          </Text>

          <HStack mt={8} gap={6} alignItems="start" justifyContent="center">
            <Box textAlign="center" maxW="435px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="end"
                minH="155px"
              >
                <Image src={discuss} alt="discuss_image" />
              </Box>
              <Text
                as="h3"
                mt={4}
                fontSize="2xl"
                textColor="primaxPurple"
                fontWeight="bold"
              >
                Proses Mudah
              </Text>
              <Text mt={4} as="p">
                Representatif kami adalah profesional yang akan membantu dan
                membimbing anda, merubah ide menjadi produk yang unik dan bisa
                dipasarkan.
              </Text>
            </Box>

            <Box textAlign="center" maxW="435px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="end"
                minH="155px"
              >
                <Image src={money} alt="discuss_image" />
              </Box>
              <Text
                as="h3"
                mt={4}
                fontSize="2xl"
                textColor="primaxPurple"
                fontWeight="bold"
              >
                Modal Kecil
              </Text>
              <Text mt={4} as="p">
                Memudahkan beautypreneur dalam mewujudkan produk impian, dengan
                kemudahan pembayaran serta MOQ yang bisa disesuaikan. Memastikan
                konsumen memperoleh produk dengan harga yang kompetitif.
              </Text>
            </Box>

            <Box textAlign="center" maxW="435px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="end"
                minH="155px"
              >
                <Image src={science} alt="discuss_image" />
              </Box>
              <Text
                as="h3"
                mt={4}
                fontSize="2xl"
                textColor="primaxPurple"
                fontWeight="bold"
              >
                R&D
              </Text>
              <Text mt={4} as="p">
                Tim Riset dan Developmen kami berpengalaman dalam menciptakan
                produk-produk kosmetik, makanan sehat, serta produk rumah tangga
                berkualitas tinggi.
              </Text>
            </Box>
          </HStack>
          <HStack mt={8} gap={6} alignItems="start" justifyContent="center">
            <Box textAlign="center" maxW="435px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="end"
                minH="155px"
              >
                <Image src={shield} alt="discuss_image" />
              </Box>
              <Text
                as="h3"
                mt={4}
                fontSize="2xl"
                textColor="primaxPurple"
                fontWeight="bold"
              >
                Jaminan Mutu dan Kualitas
              </Text>
              <Text mt={4} as="p">
                Semua proses yang dikerjakan serta bahan baku yang digunakan
                sesuai dengan standarisasi nasional dan internasional. Dengan
                pengawasan dan QC yang ketat. Demi menghasilkan produk yang aman
                dan berkualitas.
              </Text>
            </Box>

            <Box textAlign="center" maxW="435px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="end"
                minH="155px"
              >
                <Image src={paper} alt="discuss_image" />
              </Box>
              <Text
                as="h3"
                mt={4}
                fontSize="2xl"
                textColor="primaxPurple"
                fontWeight="bold"
              >
                Perizinan Mudah
              </Text>
              <Text mt={4} as="p">
                Kami pastikan legalitas, keamanan serta kehalalan produk anda
                sebelum dipasarkan. Dengan memperoleh izin BPOM, Halal MUI, Uji
                Dermatologi, dan Hak paten.
              </Text>
            </Box>
          </HStack>
        </Container>
      </Box>

      <Box pt={8} pb={16} bg="primaxLightBlue">
        <Container maxW="container.xl">
          <Text
            as="h2"
            textColor="primaxDarkPurple"
            textAlign="center"
            fontSize="4xl"
            fontWeight={800}
          >
            Company Certifications
          </Text>
          <HStack mt={8} justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="end"
              minH="155px"
            >
              <Image src={HalalLogo} alt="discuss_image" />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="end"
              minH="155px"
            >
              <Image src={BPOMLogo} alt="discuss_image" />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="end"
              minH="155px"
            >
              <Image src={GMPLogo} alt="discuss_image" />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="end"
              minH="155px"
            >
              <Image src={CpkbLogo} alt="discuss_image" />
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
