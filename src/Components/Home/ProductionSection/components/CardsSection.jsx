import {Flex, Image, Text, Button, Box, Grid} from "@chakra-ui/react";

function CardSection() {
  return (
    <Grid templateColumns={{desktop: "1fr 1fr 1fr 1fr", tablet: "1fr 1fr 1fr", mobile: "1fr"}} />
  );
}

export default CardSection;
