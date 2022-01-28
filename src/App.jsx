import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box, ChakraProvider} from "@chakra-ui/react";

import theme from "./theme";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
          <Route exact element={""} path="/" />
          <Route element={""} path="/history" />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
