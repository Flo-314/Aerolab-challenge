import {Flex, Box, Image, Text, Button} from "@chakra-ui/react";
import {useState} from "react";
import {Menu, MenuButton, MenuList, MenuGroup, MenuDivider} from "@chakra-ui/react";

import aeroPay from "../../UI Assets/assets/icons/aeropay-1.svg";
import CardAeroPay from "../../UI Assets/assets/icons/aeropay-2.svg";
import chevronIcon from "../../UI Assets/assets/icons/chevron-default.svg";

function PointsMenu({user, handlePoints}) {
  const [selectedPoints, SetSelectedPoints] = useState(1000);

  return (
    <Flex
      align="center"
      border={"1px"}
      borderColor={"neutrals.300"}
      borderRadius={"16px"}
      boxShadow={" 0px 2px 12px rgba(0, 0, 0, 0.08)"}
      gap={3}
      justify="center"
      padding={"8px 16px"}
    >
      <Image alt="logo" src={aeroPay} />
      <Text bg="brand.default" bgClip={"text"}>
        {user && user.points}
      </Text>
      <Menu placement="top-end">
        <MenuButton>
          <Image
            alt="chevron icon"
            cursor="pointer"
            src={chevronIcon}
            transform={"rotate(270deg)"}
            onClick={() => {}}
          />
        </MenuButton>
        <MenuList padding="5">
          <MenuGroup
            color="neutrals.900"
            fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
            fontWeight={600}
            title="Add Balance"
          />
          <MenuDivider />

          <Flex
            bg="neutrals.900"
            borderRadius={10}
            color="neutrals.100"
            direction={"column"}
            flex="1 auto"
            fontWeight={600}
            height="100%"
            justifyContent={"space-between"}
            minH={"150px"}
            minWidth={"250px"}
            padding={3}
            width={"100%"}
          >
            <Flex justify={"space-between"}>
              <Text fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}>Aerocard</Text>
              <Image src={CardAeroPay} />
            </Flex>
            <Flex fontSize={{desktop: "text.Dl2", mobile: "text.Ml2"}} justify={"space-between"}>
              <Text>Jonh Kite</Text>
              <Text>07/23</Text>
            </Flex>
          </Flex>
          <Flex align="center" direction={"column"} justifyContent={"center"} paddingY={3}>
            <Flex align="center" gap={5} justifyContent={"center"}>
              <Button
                bg={selectedPoints === 1000 ? "brand.default" : "#E5F0FF"}
                borderRadius={15}
                color={"neutrals.100"}
                onClick={() => {
                  SetSelectedPoints(1000);
                }}
              >
                <Text
                  bg={selectedPoints === 1000 ? "none" : "brand.default"}
                  bgClip={selectedPoints === 1000 ? "inherit" : "text"}
                >
                  1000
                </Text>
              </Button>
              <Button
                bg={selectedPoints === 5000 ? "brand.default" : "#E5F0FF"}
                borderRadius={15}
                color={"neutrals.100"}
                onClick={() => {
                  SetSelectedPoints(5000);
                }}
              >
                <Text
                  bg={selectedPoints === 5000 ? "none" : "brand.default"}
                  bgClip={selectedPoints === 5000 ? "inherit" : "text"}
                >
                  5000
                </Text>
              </Button>
              <Button
                bg={selectedPoints === 7500 ? "brand.default" : "#E5F0FF"}
                borderRadius={15}
                color={"neutrals.100"}
                onClick={() => {
                  SetSelectedPoints(7500);
                }}
              >
                <Text
                  bg={selectedPoints === 7500 ? "none" : "brand.default"}
                  bgClip={selectedPoints === 7500 ? "inherit" : "text"}
                >
                  7500
                </Text>
              </Button>
            </Flex>
            <Button
              bg="brand.default"
              borderRadius={15}
              marginTop={5}
              width="100%"
              onClick={() => {
                handlePoints(selectedPoints, "add");
              }}
            >
              <Text color="white">Add points</Text>{" "}
            </Button>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default PointsMenu;