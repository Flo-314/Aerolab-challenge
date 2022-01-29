import {Box, Flex, Text} from "@chakra-ui/react";

import Pager from "./Pager";
function BottomSection() {
  return (
    <Flex justify={"space-between"}>
      <Box />
      <Box />
      <Box fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}} fontWeight={600}>
        <Text as="span" bg="brand.default" bgClip={"text"}>
          16 of 32 {"  "}
        </Text>
        <Text color="neutrals.600" display="inline-block">
          products
        </Text>
      </Box>
      <Pager />
    </Flex>
  );
}

export default BottomSection;
