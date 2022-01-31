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
  const [sort, SetSort] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const getData = (async () => {
      let products = await fetchApi("products");
      let user = await fetchApi("user", "me");

      SetProducts(products);
      setUser(user);
      SetSort(products);
    })();
  }, []);
  const sortProducts = async (type, category) => {
    let array = [...products];

    let sortedProducts = await sortArray(array, type, category);

    await SetSort(sortedProducts);

    return false;
  };

  const handlePoints = async (quantity, type) => {
    // if type is "add"  => apiRequest. next => SetUser  = quantity + user.points
    if (type === "add") {
      let body = {
        amount: quantity,
      };

      body = JSON.stringify(body);
      let request = await fetchApi("user", "points", "POST", body);
    }
    setUser({...user, points: user.points + quantity});

    return false;
  };

  const handleSellProducts = async (productId, price) => {
    let body = {
      productId,
    };

    body = JSON.stringify(body);
    let response = await fetchApi("redeem", undefined, "post", body);

    handlePoints(price * -1);

    return false;
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
