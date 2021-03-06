import {Box, Image, Grid, GridItem} from "@chakra-ui/react";

import iconC1 from "../../../Styling/UI Assets/assets/icons/walkthrough-1.svg";
import iconC2 from "../../../Styling/UI Assets/assets/icons/walkthrough-2.svg";
import iconC3 from "../../../Styling/UI Assets/assets/icons/walkthrough-3.svg";
import imageC1 from "../../../Styling/UI Assets/assets/illustrations/walkthroug-1-desktop.png";
import imageC2 from "../../../Styling/UI Assets/assets/illustrations/walkthroug-2-desktop.png";
import imageC3 from "../../../Styling/UI Assets/assets/illustrations/walkthroug-3-desktop.png";
import tabletImage from "../../../Styling/UI Assets/assets/illustrations/hero-responsive.png";

import Card from "./Card";
function WalkthroughSection() {
  // cards data
  const card1 = {
    image: imageC1,
    icon: iconC1,
    title: "1—browse".toUpperCase(),
    content: "Browse our tech catalog with more than 20 top tech products",
  };
  const card2 = {
    image: imageC2,
    icon: iconC2,
    title: "2—choose".toUpperCase(),
    content: "Exchange your hard earned AeroPoints for the item you want",
  };
  const card3 = {
    image: imageC3,
    icon: iconC3,
    title: "3—enjoy!".toUpperCase(),
    content: "All done, you can relax! We’ll take care of delivery of your tech item!",
  };

  return (
    <section>
      <Box
        bgImg={
          "url(https://raw.githubusercontent.com/Aerolab/frontend-developer-coding-challenge/444414c19f6a997383bc0b65dac4830553b65f14/assets/illustrations/single-wave-pattern.svg)"
        }
        w="100%"
      >
        <Box
          bg="linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)"
          maxHeight={{desktop: "568px", tablet: "100%"}}
          padding={{desktop: 0, tablet: "0 0.5rem"}}
          paddingTop={{desktop: 0, tablet: "7rem", mobile: "20rem"}}
          w="100%"
        >
          <Box position={"relative"}>
            <Image
              alt="hero logo"
              display={{desktop: "none", tablet: "inherit"}}
              overflow={"hidden"}
              position="absolute"
              right="50%"
              src={tabletImage}
              transform={{
                tablet: "translate(50%,-50%) translateY(-30%) scale(1)",
                mobile: "translate(50%,-50%)  translateY(-35.5%)",
              }}
            />
          </Box>
          <Box margin="0 auto" maxWidth="1464px" paddingY={30}>
            <Grid
              gap={{desktop: 0, mobile: 3}}
              height={"100%"}
              margin="0 auto"
              padding={{desktop: 0, tablet: 1, mobile: "0 1.75rem"}}
              templateColumns={{
                svga: "repeat(3,532px)",
                svg: "repeat(3,500px)",
                desktop: "repeat(3,430px)",
                tablet: "repeat(3, 1fr)",
                mobile: "1fr",
              }}
              templateRows={{tablet: "1fr", mobile: "1fr 1fr 1fr"}}
              transform={{desktop: "translateY(-100px)"}}
              width="100%"
            >
              <GridItem transform={{desktop: "rotate(-3deg)"}} zIndex={"1"}>
                <Card {...card1} />
              </GridItem>
              <GridItem transform={{desktop: "translateX(-100px) translateY(-40px)"}} zIndex={"2"}>
                <Card {...card2} />
              </GridItem>
              <GridItem transform={{desktop: "rotate(3deg) translateX(-180px)"}} zIndex={"3"}>
                <Card {...card3} />
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default WalkthroughSection;
