import { border, extendTheme } from "@chakra-ui/react";

const colorScheme = {
  lightBlue: "#edfcff",
  blue: "#c9e5eb",
  white: "#f8fdfe",
  lightPurple: "#725d9c",
  purple: "#4a405f",
  darkPurple: "#020953",
  footer: "#addded",
};

const theme = extendTheme({
  colors: {
    primaxLightBlue: colorScheme.lightBlue,
    primaxWhite: colorScheme.white,
    primaxBlue: colorScheme.blue,
    primaxLightPurple: colorScheme.lightPurple,
    primaxPurple: colorScheme.purple,
    primaxDarkPurple: colorScheme.darkPurple,
    footer: colorScheme.footer,
  },
  styles: {
    global: {
      body: {
        fontFamily: "nunito",
      },
      a: {
        cursor: "pointer",
      },
      button: {
        bg: "primaxPurple!important",
        borderRadius: "2xl !important",
        color: "primaxWhite",
        _hover: {
          bg: "primaxDarkPurple!important",
          transition: "0.5s",
          color: "primaxBlue",
        },
      },
      p: {
        textColor: "primaxLightPurple",
        fontSize: "xl",
        fontWeight: 400,
        textAlign: "justify",
        mb: "4",
      },
    },
  },
});

export default theme;
