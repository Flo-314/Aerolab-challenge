import {useEffect, useState} from "react";

import fetchApi from "../../HelperFunctions/fetchApi";
import sortArray from "../../HelperFunctions/sortArray";

import LandingSection from "./LandingSection";
import ProductSection from "./ProductionSection/ProductSection";
import WalkthroughSection from "./WalkthroughSection/WalkthroughSection";
function Home() {
  const [products, SetProducts] = useState();
  const [sort, SetSort] = useState();

  useEffect(() => {
    const getProducts = (async () => {
      let products = await fetchApi("products");

      SetProducts(products);
    })();
  }, []);

  return (
    <main>
      <LandingSection />
      <WalkthroughSection />
      <ProductSection products={products} />
    </main>
  );
}

export default Home;
