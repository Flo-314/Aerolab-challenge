import {Flex, Text, Button} from "@chakra-ui/react";
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
      <Button _hover={{bg: "brand.default", opacity: "0.75"}} bg="brand.default" borderRadius={10}>
        {" "}
        <Text color="neutrals.100">Most Recent</Text>{" "}
      </Button>
      <Button
        bg="#E5F0FF"
        borderRadius={10}
        onClick={() => {
          sortProducts("Lowest Price");
        }}
      >
        <Text bg="brand.default" bgClip={"text"}>
          Lowest Price
        </Text>{" "}
      </Button>
      <Button
        bg="#E5F0FF"
        borderRadius={10}
        onClick={() => {
          sortProducts("Highest Price");
        }}
      >
        <Text bg="brand.default" bgClip={"text"}>
          Highest Price
        </Text>{" "}
      </Button>
    </Flex>
  );
}
export default SortMenu;
