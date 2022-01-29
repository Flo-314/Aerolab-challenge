import {Flex, Box, Image, Text, Button, Grid, GridItem, Heading, Container} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import TopSection from "./TopSection";

function ProductSection() {
  return (
    <section id="products shop ">
      <Flex
        bg="white"
        direction={"column"}
        height={"100%"}
        margin="0 auto"
        maxWidth="1464px"
        paddingTop={{desktop: "40", tablet: "10", mobile: "5"}}
        width="100%"
      >
        <TopSection />
      </Flex>
    </section>
  );
}

export default ProductSection;
