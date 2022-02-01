import {Box, Container, Flex, Grid, GridItem, Image, Text} from "@chakra-ui/react";

function Card({image, icon, title, content}) {
  return (
    <Box
      bg={{desktop: "white", mobile: "rgba(255, 255, 255, 0.7)"}}
      border="1px solid"
      borderColor={"neutrals.300"}
      borderRadius={"25"}
      margin={{mobile: "0 1rem", tablet: "0"}}
      padding={3}
      width={{desktop: "100%"}}
    >
      <Grid
        bg="white"
        border="1px solid "
        borderColor={"neutrals.300"}
        borderRadius={"20"}
        direction={"column"}
        height="100%"
        maxHeight={{desktop: "676px", tablet: "477px", mobile: "inherit"}}
        maxWidth={{desktop: "532px", tablet: "323px", mobile: "inherit"}}
        templateColumns={"1fr"}
        templateRows={{desktop: "4fr 1fr", tablet: "5fr 3fr", mobile: "7fr 4fr"}}
        width="100%"
      >
        <GridItem bg="specials.illustrationBg" borderRadius={"1rem 1rem 0 0px"} width={"100%"}>
          <Image alt="propaganda" height="100%" src={image} width="100%" />
        </GridItem>
        <GridItem>
          <Flex direction={"column"} flex="1" gap={3} padding="5">
            <Flex gap="3">
              <Box
                bg="brand.light"
                borderRadius={5}
                height="100%"
                maxHeight={{desktop: "48px", mobile: "40px"}}
                maxWidth={{desktop: "48px", mobile: "40px"}}
                padding="1"
                width="100%"
              >
                <Image alt="propaganda icon" height="100%" src={icon} width="100%" />
              </Box>
              <Text
                bg="brand.default"
                bgClip={"text"}
                fontSize={{desktop: "titles.Dl3", mobile: "titles.Ml3"}}
                fontWeight={"1000"}
              >
                {title}
              </Text>
            </Flex>
            <Container margin="0" maxWidth={"23rem"} padding="0">
              <Text
                color="neutrals.600"
                fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
                fontWeight="600"
              >
                {content}
              </Text>
            </Container>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Card;
