import {extendTheme} from "@chakra-ui/react";
import {createBreakpoints} from "@chakra-ui/theme-tools";
const breakpoints = createBreakpoints({
  mobile: "0px", // 375px
  tablet: "700px", //  1025px
  desktop: "1026px", // 1920 px
  svg: "1250px", // breakpoints for the tricky things
  svga: "1500px",
});
const theme = extendTheme({
  breakpoints,
  colors: {
    neutrals: {
      900: "#252F3D",
      600: "#7C899C",
      500: "#8FA3BF",
      300: "#DAE4F2",
      200: "#E6EDF7",
      100: "#F5F9FF",
      0: "#FFFFFF",
    },
    brand: {
      default: "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
      hover: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)",
      light: "#E5F0FF",
      light2: "#CCE1FF",
    },
    green: {
      default: "#29CC74",
      light: "#CCFFE3",
    },
    red: {
      default: "#E07F4F",
      light: "#FFDFD9",
    },
    specials: {
      illustrationBg:
        "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)",
      aerolab: "linear-gradient(180deg, #FF8800 0%, #FF6600 100%)",
    },
  },
  fontSizes: {
    titles: {
      Dl1: "200px",
      Dl2: "48px",
      Dl3: "32px",
      Ml1: "96px",
      Ml2: "32px",
      Ml3: "24px",
    },
    text: {
      Dl1: "18px",
      Dl2: "14px",
      Ml1: "16px",
      Ml2: "12px",
    },
  },
});

export default theme;
