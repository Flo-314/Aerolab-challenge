import {Flex, Select, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";

function FilterMenu({sortProducts}) {
  const [sort, SetSort] = useState();

  useEffect(() => {
    if (sort && sortProducts) {
      switch (sort) {
        case "All products":
          sortProducts(undefined);
          break;
        case "Gaming":
          sortProducts("category", "Gaming");
          break;
        case "Audio":
          sortProducts("category", "Audio");
          break;
        case "Smart Home":
          sortProducts("category", "Smart Home");
          break;
        case "Monitors & TV":
          sortProducts("category", "Monitors & TV");
          break;
      }
    }
  }, [sort]);

  return (
    <Flex align={"center"} justify={"center"} marginX="5">
      <Text
        color="neutrals.600"
        display={{desktop: "inherit", mobile: "none"}}
        fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
        fontWeight={600}
        minWidth={"80px"}
      >
        Filter by:
      </Text>

      <Select
        bg="white"
        border={"1px solid #DAE4F2"}
        borderRadius={"1rem"}
        color="neutrals.600"
        fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
        fontWeight={600}
        minH={"50px"}
        minW={"200px"}
        paddingLeft={"0"}
        placeholder="Select option"
        onChange={(e) => {
          SetSort(e.target.value);
        }}
      >
        <option value="All products">All products</option>
        <option value="Gaming">Gaming</option>
        <option value="Audio">Audio</option>
        <option value="Smart Home">Smart Home</option>
        <option value="Monitors & TV"> Monitors & TV</option>
      </Select>
    </Flex>
  );
}

export default FilterMenu;
