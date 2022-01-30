import {Flex} from "@chakra-ui/react";

import BottomSection from "./components/BottomSection";
import CardSection from "./components/CardsSection";
import TopSection from "./components/TopSection";

function ProductSection({products}) {
  return (
    <section id="products shop ">
      <Flex
        bg="white"
        direction={"column"}
        height={"100%"}
        margin="0 auto"
        maxWidth="1464px"
        paddingLeft={{desktop: "40px", mobile: "20px"}}
        paddingRight={{desktop: "40px", mobile: "20px"}}
        paddingTop={{desktop: "60", tablet: "40", mobile: "25"}}
        width="100%"
      >
        <TopSection />
        <CardSection products={products} />
        <BottomSection />
      </Flex>
    </section>
  );
}

export default ProductSection;
