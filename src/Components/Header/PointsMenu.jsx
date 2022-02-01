import {Flex, Box, Image, Text, Button} from "@chakra-ui/react";
import {useState} from "react";
import {Menu, MenuButton, MenuList, MenuGroup, MenuDivider} from "@chakra-ui/react";
import {useToast} from "@chakra-ui/react";

import aeroPay from "../../Styling/UI Assets/assets/icons/aeropay-1.svg";
import CardAeroPay from "../../Styling/UI Assets/assets/icons/aeropay-2.svg";
import chevronIcon from "../../Styling/UI Assets/assets/icons/chevron-default.svg";

function PointsMenu({user, handlePoints}) {
  const [selectedPoints, SetSelectedPoints] = useState(1000);
  const toast = useToast({
    position: "bottom-left",
    title: selectedPoints + " AeroPoints Added successfully",
    status: "success",
    duration: 3500,
    isClosable: true,
    containerStyle: {
      width: {desktop: "800px", mobile: "150px"},
      maxWidth: "80%",
      marginLeft: "2em",
      marginBottom: "2em",
    },
  });

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
      <Image
        alt="logo"
        height={{tablet: "32px", mobile: "24px"}}
        src={aeroPay}
        width={{tablet: "32px", mobile: "24px"}}
      />
      <Text bg="brand.default" bgClip={"text"} fontSize={{tablet: "text.Dl1", mobile: "text.Ml1"}}>
        {user && user.points}
      </Text>
      <Menu placement="top-end">
        <MenuButton>
          <Image
            alt="chevron icon"
            cursor="pointer"
            height={{tablet: "24px", mobile: "20px"}}
            src={chevronIcon}
            transform={"rotate(90deg)"}
            width={{tablet: "24px", mobile: "20px"}}
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
              <Image
                height={{tablet: "24px", mobile: "20px"}}
                src={CardAeroPay}
                width={{tablet: "24px", mobile: "20px"}}
              />
            </Flex>
            <Flex fontSize={{desktop: "text.Dl2", mobile: "text.Ml2"}} justify={"space-between"}>
              <Text>Jonh Kite</Text>
              <Text>07/23</Text>
            </Flex>
          </Flex>
          <Flex align="center" direction={"column"} justifyContent={"center"} paddingY={3}>
            <Flex align="center" gap={5} justifyContent={"center"}>
              <Button
                _hover={{backgrund: "none", opacity: "0.7"}}
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
                _hover={{backgrund: "none", opacity: "0.7"}}
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
                _hover={{backgrund: "none", opacity: "0.7"}}
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
              _hover={{backgrund: "none", opacity: "0.7"}}
              bg="brand.default"
              borderRadius={15}
              marginTop={5}
              width="100%"
              onClick={async () => {
                await handlePoints(selectedPoints, "add");
                toast();
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
