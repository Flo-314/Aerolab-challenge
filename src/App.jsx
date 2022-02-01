import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import fetchApi from "./HelperFunctions/fetchApi";
import sortArray from "./HelperFunctions/sortArray";
import Home from "./Components/Home/Home";
import theme from "./Styling/theme";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  const [products, SetProducts] = useState();
  const [productsPage, SetProductsPage] = useState();
  const [sort, SetSort] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const getData = (async () => {
      const products = await fetchApi("products");
      const user = await fetchApi("user", "me");
      const page1 = products.slice(0, 16);

      setUser(user);
      SetProducts(products);
      SetProductsPage(page1);
      SetSort(page1);
    })();
  }, []);
  const sortProducts = async (type, category) => {
    //all the product shows only the page products
    if (type === undefined) {
      const array = [...productsPage];

      await SetSort(array);
    } //for category sorts all the products
    else if (category) {
      const array = [...products];

      const sortedProducts = await sortArray(array, type, category);

      await SetSort(sortedProducts);
    } //for price sorts only the SortedProducts
    else {
      const array = [...sort];

      const sortedProducts = await sortArray(array, type);

      await SetSort(sortedProducts);
    }

    return false;
  };

  const handlePoints = async (quantity, type) => {
    // if type is "add"  => apiRequest. next => SetUser  = quantity + user.points
    if (type === "add") {
      let body = {
        amount: quantity,
      };

      body = JSON.stringify(body);
      const request = await fetchApi("user", "points", "POST", body);
    }
    setUser({...user, points: user.points + quantity});

    return false;
  };

  const handleSellProducts = async (productId, price) => {
    let body = {
      productId,
    };

    body = JSON.stringify(body);
    const response = await fetchApi("redeem", undefined, "post", body);

    handlePoints(price * -1);

    return false;
  };
  const handleMovePage = (page) => {
    const newProducts = [...products];

    if (page === 1) {
      const products = newProducts.slice(0, 16);

      SetSort(products);

      SetProductsPage(products);
    } else {
      const products = newProducts.slice(16);

      SetProductsPage(products);
      SetSort(products);
    }
  };

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header handlePoints={handlePoints} user={user} />

        <Routes>
          <Route
            exact
            element={
              <Home
                handleMovePage={handleMovePage}
                handleSellProducts={handleSellProducts}
                sort={sort}
                sortProducts={sortProducts}
                user={user}
              />
            }
            path="/"
          />
          <Route element={""} path="/history" />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
