import {Flex, Image, Text, Button, Box} from "@chakra-ui/react";
import {useState} from "react";

import ChevronDownIcon from "../../../../Styling/UI Assets/assets/icons/chevron-default.svg";

function Pager({handleMovePage}) {
  const [page, SetPage] = useState(1);

  return (
    <Flex
      align="center"
      bg="white"
      border={"1px solid #DAE4F2"}
      borderRadius={"1rem"}
      gap="3"
      justify={"center"}
      marginX={5}
      maxHeight={"65px"}
      padding="12px 16px"
    >
      <Button
        _hover={{background: "#CCE1FF"}}
        bg="neutrals.200"
        borderRadius={10}
        maxHeight={"40px"}
        maxWidth={"40px"}
        onClick={() => {
          handleMovePage(1);
          SetPage(1);
        }}
      >
        <Image
          alt="chevron icon"
          maxHeight={"30px"}
          maxWidth={"15px"}
          src={ChevronDownIcon}
          transform={"rotate(180deg)"}
        />
      </Button>
      <Box
        color="neutrals.600"
        fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
        fontWeight={600}
      >
        <Text display={"inline-block"} marginRight={1}>
          Page
        </Text>
        <Text bg="brand.default" bgClip="text" display={"inline-block"}>
          {page} of 2
        </Text>
      </Box>

      <Button
        _hover={{background: "#CCE1FF"}}
        bg="neutrals.200"
        borderRadius={10}
        maxHeight={"40px"}
        maxWidth={"40px"}
        onClick={() => {
          handleMovePage(2);
          SetPage(2);
        }}
      >
        <Image alt="chevron icon" maxHeight={"30px"} maxWidth={"15px"} src={ChevronDownIcon} />
      </Button>
    </Flex>
  );
}

export default Pager;
