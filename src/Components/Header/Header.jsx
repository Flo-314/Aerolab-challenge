import {Flex, Box, Image, Text, Button} from "@chakra-ui/react";
import {useState} from "react";

import logo from "../../UI Assets/assets/icons/aerolab-logo-1.svg";
import aeroPay from "../../UI Assets/assets/icons/aeropay-1.svg";
import chevronIcon from "../../UI Assets/assets/icons/chevron-default.svg";
import miniLogo from "../../UI Assets/assets/icons/aerolab-logo-2.svg";

import PointsMenu from "./PointsMenu";
function Header({user, handlePoints}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header>
      <Box width={"100%"}>
        <Flex
          align="center"
          bg="white"
          height={"100%"}
          justify="space-between"
          margin="0 auto"
          marginBottom={"9rem"}
          maxWidth="1464px"
          paddingX="20px"
          paddingY="40px"
          width="100%"
        >
          <Box>
            <Image alt="logo" display={{desktop: "inherit", mobile: "none"}} src={logo} />
            <Image alt="logo" display={{desktop: "none", mobile: "inherit"}} src={miniLogo} />
          </Box>

          <PointsMenu handlePoints={handlePoints} user={user} />
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
