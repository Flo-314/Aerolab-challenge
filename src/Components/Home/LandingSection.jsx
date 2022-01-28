import {Flex, Box, Image, Text, Button, Grid, GridItem, Heading, Container} from "@chakra-ui/react";

import heroDesktop from "../../UI Assets/assets/illustrations/hero-desktop.png";
import heroResponsive from "../../UI Assets/assets/illustrations/hero-responsive.png";
import icon from "../../UI Assets/assets/icons/Icons.svg";
import waveBG from "../../UI Assets/assets/illustrations/single-wave-pattern.svg";
function LandingSection() {
  return (
    <section>
      <Box
        bgImg={
          "url(https://raw.githubusercontent.com/Aerolab/frontend-developer-coding-challenge/444414c19f6a997383bc0b65dac4830553b65f14/assets/illustrations/single-wave-pattern.svg)"
        }
        w="100%"
      >
        <Flex
          align="center"
          height={"100%"}
          justify="space-between"
          margin="0 auto"
          maxWidth="1464px"
          paddingX="20px"
          paddingY="40px"
          width="100%"
        >
          <Grid templateColumns={"1fr 1fr"} templateRows={"minmax(min-content, 400px)"}>
            <GridItem>
              <Flex direction={"column"}>
                <Text
                  color={"neutrals.600"}
                  fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
                  fontWeight={"600"}
                  marginY={5}
                >
                  EXPLORE THE
                </Text>

                <Heading
                  color={"neutrals.900"}
                  fontSize={{desktop: "titles.Dl1", mobile: "titles.Ml1"}}
                  fontWeight={"1000"}
                  lineHeight={"80%"}
                >
                  <Box bg="brand.default" bgClip={"text"}>
                    TECH
                  </Box>
                  ZONE
                </Heading>
                <Container marginX="0" marginY={5} paddingX="0">
                  <Text
                    color={"neutrals.600"}
                    fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
                    fontWeight={"600"}
                  >
                    Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange
                    them for cool tech.
                  </Text>
                </Container>
              </Flex>
              <Box>
                <Button
                  bg="brand.default"
                  borderRadius={"24px"}
                  color={"neutrals.0"}
                  fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
                  marginY={"48px"}
                  padding={"30px"}
                >
                  View all products <Image src={icon} />
                </Button>
              </Box>
            </GridItem>

            <GridItem>
              <Flex
                bg="specials.illustrationBg"
                borderRadius={"100px"}
                transform={"scale(0.85)"}
                transformOrigin={"50% 15%"}
              >
                <Image
                  height="auto"
                  src={heroDesktop}
                  transform="scale(1.4)"
                  transformOrigin={"50% 100%"}
                />
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </section>
  );
}

export default LandingSection;
