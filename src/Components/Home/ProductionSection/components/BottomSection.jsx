import {Box, Flex, Text} from "@chakra-ui/react";

import Pager from "./Pager";
function BottomSection(sortProducts) {
  return (
    <Flex
      align={"center"}
      direction={{desktop: "row", mobile: "column"}}
      gap={{desktop: "0", mobile: "5"}}
      justify={{desktop: "space-between", mobile: "center"}}
    >
      <Box />
      <Box />
      <Box
        fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
        fontWeight={600}
        order={{desktop: "0", mobile: "2"}}
      >
        <Text as="span" bg="brand.default" bgClip={"text"}>
          16 of 32 {"  "}
        </Text>
        <Text color="neutrals.600" display="inline-block">
          products
        </Text>
      </Box>
      <Pager order={{desktop: "999", mobile: "1"}} />
    </Flex>
  );
}

export default BottomSection;
