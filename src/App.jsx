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

    SetSort(sortedProducts);
  };

  const handlePoints = async (quantity, type) => {
    // if type is "add"  => apiRequest. next => SetUser  = quantity + user.points
    if (type === "add") {
      let body = {
        amount: quantity,
      };

      body = JSON.stringify(body);
      let request = await fetchApi("user", "points", "POST", body);

      console.log(request);
    }
    setUser({...user, points: user.points + quantity});
  };

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header user={user} />

        <Routes>
          <Route
            exact
            element={<Home sort={sort} sortProducts={sortProducts} user={user} />}
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
