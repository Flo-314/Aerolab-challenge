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
      <Button bg="#E5F0FF">
        {" "}
        <Text bg="brand.default" bgClip={"text"}>
          Most Recent
        </Text>{" "}
      </Button>
      <Button
        bg="#E5F0FF"
        onClick={() => {
          sortProducts("Lowest Price");
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
            sortProducts("Highest Price");
          }}
        >
          Highest Price
        </Text>{" "}
      </Button>
    </Flex>
  );
}
export default SortMenu;
