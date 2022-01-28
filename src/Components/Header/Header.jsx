import {Flex, Box, Image, Text, Button} from "@chakra-ui/react";
import {useState} from "react";

import logo from "../../UI Assets/assets/icons/aerolab-logo-1.svg";
import aeroPay from "../../UI Assets/assets/icons/aeropay-1.svg";
import chevronIcon from "../../UI Assets/assets/icons/chevron-default.svg";
function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header>
      <Box bg="gray" width={"100%"}>
        <Flex
          align="center"
          bg="white"
          height={"100%"}
          justify="space-between"
          margin="0 auto"
          maxWidth="1464px"
          paddingX="20px"
          paddingY="40px"
          width="100%"
        >
          <Box>
            <Image src={logo} />
          </Box>

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
            <Image src={aeroPay} />
            <Text bg="brand.default" bgClip={"text"}>
              10.000
            </Text>

            <Image
              cursor="pointer"
              src={chevronIcon}
              transform={"rotate(270deg)"}
              onClick={() => {}}
            />
          </Flex>
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
