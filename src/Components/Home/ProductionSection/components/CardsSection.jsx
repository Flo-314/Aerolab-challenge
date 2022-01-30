import {Grid, GridItem} from "@chakra-ui/react";

import Card from "./Card";

function CardSection({sort, user}) {
  return (
    <Grid
      gap="10"
      templateColumns={{desktop: "1fr 1fr 1fr 1fr", tablet: "1fr 1fr 1fr", mobile: "1fr"}}
    >
      {sort &&
        sort.map((product, index) => {
          return (
            <GridItem key={index}>
              <Card {...product} user={user} />
            </GridItem>
          );
        })}
    </Grid>
  );
}

export default CardSection;
