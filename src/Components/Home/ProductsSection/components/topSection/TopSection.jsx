import {Flex, Box, Heading, Link} from "@chakra-ui/react";

import Pager from "../Pager";

import FilterMenu from "./FilterMenu";
import SortMenu from "./SortMenu";

function TopSection({sortProducts, handleMovePage}) {
  return (
    <Box paddingY={{desktop: "20", mobile: "10"}}>
      <Heading
        fontSize={{desktop: "titles.Dl2", mobile: "titles.Ml2"}}
        fontWeight={1000}
        marginBottom={5}
        textAlign={{tablet: "inherit", mobile: "center"}}
      >
        <Box as="span" color={"brand.blue"} marginRight={3}>
          TECH
        </Box>
        PRODUCTS
      </Heading>
      <Flex
        direction={{tablet: "row", mobile: "column"}}
        gap={{tablet: "0", mobile: "5"}}
        id="products"
        justify={{desktop: "space-between", tablet: "space-between", mobile: "center"}}
      >
        {/* MENU TABLET/MOBILE */}
        <Flex
          align={{tablet: "flex-start"}}
          direction={"column"}
          display={{desktop: "none", mobile: "inherit"}}
          gap={5}
        >
          <FilterMenu sortProducts={sortProducts} />
          <SortMenu sortProducts={sortProducts} />
        </Flex>
        {/*  MENU DESKTOP   */}
        <Box display={{desktop: "inherit", mobile: "none"}}>
          <FilterMenu display={{mobile: "none"}} sortProducts={sortProducts} />
        </Box>
        <Box display={{desktop: "inherit", mobile: "none"}}>
          <SortMenu display={{mobile: "none"}} sortProducts={sortProducts} />
        </Box>
        <Pager handleMovePage={handleMovePage} />
      </Flex>
    </Box>
  );
}

export default TopSection;
