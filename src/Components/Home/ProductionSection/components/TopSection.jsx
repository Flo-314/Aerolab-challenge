import {Flex, Box, Image, Text, Button, Heading} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";

import ChevronDownIcon from "../../../../UI Assets/assets/icons/chevron-default.svg";

import Pager from "./Pager";
function FilterMenu(sortProducts) {
  return (
    <Flex align={"center"} justify={"center"}>
      <Text
        color="neutrals.600"
        display={{desktop: "inherit", mobile: "none"}}
        fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
        fontWeight={600}
      >
        Filter by:
      </Text>
      <Menu>
        {({isOpen}) => (
          <>
            <MenuButton
              as={Button}
              bg="white"
              border={"1px solid #DAE4F2"}
              borderRadius={"1rem"}
              isActive={isOpen}
              minW={"200px"}
              paddingLeft={"0"}
              paddingX={"10"}
              rightIcon={
                <Image alt="chevron icon" src={ChevronDownIcon} transform={"rotate(90deg)"} />
              }
            >
              <Text
                color="neutrals.600"
                fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
                fontWeight={600}
              >
                All products
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  sortProducts.sortProducts.sortProducts(undefined);
                }}
              >
                All products
              </MenuItem>
              <MenuItem
                onClick={() => {
                  sortProducts.sortProducts.sortProducts("category", "Gaming");
                }}
              >
                Gaming
              </MenuItem>
              <MenuItem
                onClick={() => {
                  sortProducts.sortProducts.sortProducts("category", "Audio");
                }}
              >
                Audio
              </MenuItem>
              <MenuItem
                onClick={() => {
                  sortProducts.sortProducts.sortProducts("category", "Smart Home");
                }}
              >
                Smart Home
              </MenuItem>
              <MenuItem
                onClick={() => {
                  sortProducts.sortProducts.sortProducts("category", "Monitors & TV");
                }}
              >
                Monitors & TV
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
}

function SortMenu(sortProducts) {
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
          sortProducts.sortProducts.sortProducts("Lowest Price");
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
            sortProducts.sortProducts.sortProducts("Highest Price");
          }}
        >
          Highest Price
        </Text>{" "}
      </Button>
    </Flex>
  );
}

function TopSection(sortProducts) {
  return (
    <Box>
      <Heading
        fontSize={{desktop: "titles.Dl2", mobile: "titles.Ml2"}}
        fontWeight={1000}
        marginBottom={5}
      >
        <Box as="span" color={"brand.blue"} marginRight={3}>
          TECH
        </Box>
        PRODUCTS
      </Heading>
      <Flex
        direction={{tablet: "row", mobile: "column"}}
        gap={{tablet: "0", mobile: "5"}}
        justify={{desktop: "space-between", mobile: "center"}}
      >
        {/* MENU TABLET/MOBILE */}
        <Flex direction={"column"} display={{desktop: "none", mobile: "inherit"}} gap={5}>
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
