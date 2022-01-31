import {Flex, Image, Text, Button, Box} from "@chakra-ui/react";

import ChevronDownIcon from "../../../../Styling/UI Assets/assets/icons/chevron-default.svg";

function Pager({handleMovePage}) {
  return (
    <Flex
      align="center"
      bg="white"
      border={"1px solid #DAE4F2"}
      borderRadius={"1rem"}
      gap="3"
      justify={"center"}
      maxHeight={"65px"}
      padding="12px 16px"
    >
      <Button
        borderRadius={5}
        maxHeight={"40px"}
        maxWidth={"40px"}
        onClick={() => {
          handleMovePage(1);
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
          1 of 2
        </Text>
      </Box>

      <Button
        borderRadius={2}
        maxHeight={"40px"}
        maxWidth={"40px"}
        onClick={() => {
          handleMovePage(2);
        }}
      >
        <Image alt="chevron icon" maxHeight={"30px"} maxWidth={"15px"} src={ChevronDownIcon} />
      </Button>
    </Flex>
  );
}

export default Pager;
