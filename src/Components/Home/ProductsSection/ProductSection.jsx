import {Flex} from "@chakra-ui/react";

import BottomSection from "./components/BottomSection";
import CardSection from "./components/CardsSection/CardsSection";
import TopSection from "./components/topSection/TopSection";

function ProductSection({sort, sortProducts, user, handleSellProducts, handleMovePage}) {
  return (
    <section id="products shop ">
      <Flex
        bg="white"
        direction={"column"}
        height={"100%"}
        margin="0 auto"
        maxWidth="1464px"
        paddingTop={{desktop: "60", tablet: "40", mobile: "25"}}
        width="90%"
      >
        <TopSection handleMovePage={handleMovePage} sortProducts={sortProducts} />
        <CardSection handleSellProducts={handleSellProducts} sort={sort} user={user} />
        <BottomSection handleMovePage={handleMovePage} />
      </Flex>
    </section>
  );
}

export default ProductSection;
