import {Box, Button, Flex, Grid, GridItem, Image, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useToast} from "@chakra-ui/react";

import WhiteIcon from "../../../../../Styling/UI Assets/assets/icons/aeropay-3.svg";
import BlackIcon from "../../../../../Styling/UI Assets/assets/icons/aeropay-2.svg";

function Card({_id, category, cost, img, name, user, handleSellProducts}) {
  const [isRedeemAble, SetIsRedeemable] = useState();
  const [isLoading, SetIsLoading] = useState(false);

  const toast = useToast({
    position: "bottom-left",
    title: name + "  redeemed successfully",
    status: "success",
    duration: 3500,
    isClosable: true,
    containerStyle: {
      width: {desktop: "800px", mobile: "150px"},
      maxWidth: "80%",
      marginLeft: "2em",
      marginBottom: "2em",
    },
  });

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const checkIsRedeemAble = (() => {
      if (user && cost) {
        const userPoints = user.points;

        if (userPoints > cost) {
          SetIsRedeemable(true);
        } else {
          SetIsRedeemable(false);
        }
      }
    })();
  }, [user, cost]);

  return (
    <Flex direction="column">
      <Grid
        alignItems={"center"}
        border="1px"
        borderColor={"neutrals.300"}
        borderRadius={"10"}
        filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.02));"
        height={"506px"}
        templateColumns={"1fr"}
        templateRows={"minmax(348px,4fr) 1fr"}
      >
        <GridItem borderRadius={"1rem 1rem 0 0 "} justifySelf={"center"} maxHeight={"506px"}>
          <Box>
            <Image alt="product" height="204px" src={img.url} width="280px" />
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
      {isRedeemAble ? (
        <Button
          bg="brand.default"
          color="white"
          isLoading={isLoading}
          marginY="5"
          onClick={async () => {
            SetIsLoading(true);
            await SetIsLoading(await handleSellProducts(_id, cost));
            toast({});
          }}
        >
          Reedem now for{" "}
          <Image
            alt="aeropoints"
            height={{tablet: "24px", mobile: "20px"}}
            marginX={2}
            src={WhiteIcon}
            width={{tablet: "24px", mobile: "20px"}}
          />{" "}
          {cost}
        </Button>
      ) : (
        <Button disabled bg="neutrals.200" color="#7C889C" marginTop="3" marginY="5">
          You need{" "}
          <Image
            alt="aeropoints"
            height={{tablet: "24px", mobile: "20px"}}
            marginX={2}
            src={BlackIcon}
            width={{tablet: "24px", mobile: "20px"}}
          />
          {cost - user.points} more
        </Button>
      )}
    </Flex>
  );
}

export default Card;
