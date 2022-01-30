import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box, ChakraProvider} from "@chakra-ui/react";

import fetchApi from "./HelperFunctions/fetchApi";
import sortArray from "./HelperFunctions/sortArray";
import Home from "./Components/Home/Home";
import theme from "./Styling/theme";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  const [products, SetProducts] = useState();
  const [sort, SetSort] = useState();

  useEffect(() => {
    const getProducts = (async () => {
      let products = await fetchApi("products");

      SetProducts(products);
      let sortedProducts = await sortArray(products, "Highest Price");

      SetSort(sortedProducts);
    })();
  }, []);

  const sortProducts = async (type, category) => {
    let array = [...products];

    let sortedProducts = await sortArray(array, type, category);

    SetSort(sortedProducts);
  };

  console.log(sort);

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
          <Route exact element={<Home sort={sort} sortProducts={sortProducts} />} path="/" />
          <Route element={""} path="/history" />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
