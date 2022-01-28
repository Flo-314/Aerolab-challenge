import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box, ChakraProvider} from "@chakra-ui/react";

import theme from "./theme";
import Header from "./Components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
          <Route exact element={""} path="/" />
          <Route element={""} path="/history" />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
