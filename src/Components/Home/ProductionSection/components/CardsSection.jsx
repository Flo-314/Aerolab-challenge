import {Flex, Image, Text, Button, Box, Grid} from "@chakra-ui/react";

import Card from "./Card";

function CardSection({sort}) {
  return (
    <Grid
      gap="10"
      templateColumns={{desktop: "1fr 1fr 1fr 1fr", tablet: "1fr 1fr 1fr", mobile: "1fr"}}
    >
      {sort &&
        sort.map((product, index) => {
          return <Card key={index} {...product} />;
        })}
    </Grid>
  );
}

export default CardSection;
