import {Box, Button, Flex, Grid, GridItem, Image, Text} from "@chakra-ui/react";

import WhiteIcon from "../../../../UI Assets/assets/icons/aeropay-3.svg";
import BlackIcon from "../../../../UI Assets/assets/icons/aeropay-2.svg";

function Card({category, cost, img, name}) {
  return (
    <Flex direction="column">
      <Grid
        alignItems={"center"}
        border="1px"
        borderColor={"neutrals.300"}
        borderRadius={"10"}
        filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.02));"
        templateColumns={"1fr"}
        templateRows={"minmax(348px,4fr) 1fr"}
      >
        <GridItem borderRadius={"1rem 1rem 0 0 "} justifySelf={"center"}>
          <Box>
            <Image height="204px" src={img.url} width="280px" />
          </Box>
        </GridItem>
        <GridItem borderColor={"#DAE4F2"} borderTop="1px" padding="7" paddingY="5">
          <Flex direction="column">
            <Text
              color="neutrals.900"
              fontSize={{tablet: "text.Dl1", mobile: "text.Ml1"}}
              fontWeight={600}
            >
              {name}
            </Text>
            <Text
              color="neutrals.600"
              fontSize={{tablet: "text.Dl2", mobile: "text.Ml2"}}
              fontWeight={600}
            >
              {category}
            </Text>
          </Flex>
        </GridItem>
      </Grid>
      <Button bg="brand.default" color="white" marginY="5">
        Reedem for <Image marginX={2} src={WhiteIcon} /> {cost}
      </Button>
      <Button bg="neutrals.200" color="#7C889C" marginTop="3">
        You need <Image marginX={2} src={BlackIcon} />
        {cost}
      </Button>
    </Flex>
  );
}

export default Card;
