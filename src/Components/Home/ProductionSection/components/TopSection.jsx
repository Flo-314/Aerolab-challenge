import {Flex, Box, Select, Text, Button, Heading} from "@chakra-ui/react";
import {useEffect, useState} from "react";

import Pager from "./Pager";
function FilterMenu({sortProducts}) {
  const [sort, SetSort] = useState();

  useEffect(() => {
    if (sort && sortProducts) {
      switch (sort) {
        case "All products":
          sortProducts(undefined);
          break;
        case "Gaming":
          sortProducts("category", "Gaming");
          break;
        case "Audio":
          sortProducts("category", "Audio");
          break;
        case "Smart Home":
          sortProducts("category", "Smart Home");
          break;
        case "Monitors & TV":
          sortProducts("category", "Monitors & TV");
          break;
      }
    }
  }, [sort]);

  return (
    <Flex align={"center"} justify={"center"}>
      <Text
        color="neutrals.600"
        display={{desktop: "inherit", mobile: "none"}}
        fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
        fontWeight={600}
        minWidth={"80px"}
      >
        Filter by:
      </Text>

      <Select
        bg="white"
        border={"1px solid #DAE4F2"}
        borderRadius={"1rem"}
        color="neutrals.600"
        fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
        fontWeight={600}
        minH={"50px"}
        minW={"200px"}
        paddingLeft={"0"}
        placeholder="Select option"
        onChange={(e) => {
          SetSort(e.target.value);
        }}
      >
        <option value="All products">All products</option>
        <option value="Gaming">Gaming</option>
        <option value="Audio">Audio</option>
        <option value="Smart Home">Smart Home</option>
        <option value="Monitors & TV"> Monitors & TV</option>
      </Select>
    </Flex>
  );
}

function SortMenu({sortProducts}) {
  return (
    <Flex
      align={"center"}
      direction={{tablet: "row", mobile: "column"}}
      fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
      fontWeight={600}
      gap={4}
    >
      {" "}
      <Text color="neutrals.600" display={{desktop: "inherit", mobile: "none"}}>
        Sort By:
      </Text>
      <Button bg="#E5F0FF">
        {" "}
        <Text bg="brand.default" bgClip={"text"}>
          Most Recent
        </Text>{" "}
      </Button>
      <Button
        bg="#E5F0FF"
        onClick={() => {
          sortProducts("Lowest Price");
        }}
      >
        <Text bg="brand.default" bgClip={"text"}>
          Lowest Price
        </Text>{" "}
      </Button>
      <Button bg="#E5F0FF">
        {" "}
        <Text
          bg="brand.default"
          bgClip={"text"}
          onClick={() => {
            sortProducts("Highest Price");
          }}
        >
          Highest Price
        </Text>{" "}
      </Button>
    </Flex>
  );
}

function TopSection({sortProducts}) {
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
        <Pager />
      </Flex>
    </Box>
  );
}

export default TopSection;
