import {Flex, Box, Image, Text, Button, Heading} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";

import ChevronDownIcon from "../../../../UI Assets/assets/icons/chevron-default.svg";

import Pager from "./Pager";
function TopSection() {
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
      <Flex justify={"space-between"}>
        <Flex align={"center"}>
          <Text
            color="neutrals.600"
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
                  rightIcon={<Image src={ChevronDownIcon} transform={"rotate(90deg)"} />}
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
                  <MenuItem>All products</MenuItem>
                  <MenuItem>Gaming</MenuItem>
                  <MenuItem>Audio</MenuItem>
                  <MenuItem>Smart Home</MenuItem>
                  <MenuItem>Monitors & TV</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
        <Flex
          align={"center"}
          fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
          fontWeight={600}
          gap={4}
        >
          {" "}
          <Text color="neutrals.600">Sort By:</Text>
          <Button bg="#E5F0FF">
            {" "}
            <Text bg="brand.default" bgClip={"text"}>
              Most Recent
            </Text>{" "}
          </Button>
          <Button bg="#E5F0FF">
            {" "}
            <Text bg="brand.default" bgClip={"text"}>
              Lowest Price
            </Text>{" "}
          </Button>
          <Button bg="#E5F0FF">
            {" "}
            <Text bg="brand.default" bgClip={"text"}>
              Highest Price
            </Text>{" "}
          </Button>
        </Flex>
        <Pager />
      </Flex>
    </Box>
  );
}

export default TopSection;
