import { extendTheme } from "@chakra-ui/react";

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
    },
  },
});

export default theme;
