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

import ChevronDownIcon from "../../../UI Assets/assets/icons/chevron-default.svg";
function TopSection() {
  return (
    <Box>
      <Heading fontSize={{desktop: "titles.Dl2", mobile: "titles.Ml2"}} fontWeight={1000}>
        <Box as="span" color={"brand.blue"}>
          TECH
        </Box>
        PRODUCTS
      </Heading>
      <Flex>
        <Flex>
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
                  All products
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
        <Flex>
          {" "}
          <Text
            color="neutrals.600"
            fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
            fontWeight={600}
          >
            Sort By:
          </Text>
          <Button>Most Recent</Button>
          <Button>Lowest Price</Button>
          <Button>Highest Price</Button>
        </Flex>
        <Flex>
          <Button>
            <Image src={ChevronDownIcon} transform={"rotate(180deg)"} />
          </Button>
          <Text>Page of</Text>
          <Text>1 of 2</Text>
          <Button>
            <Image src={ChevronDownIcon} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default TopSection;
