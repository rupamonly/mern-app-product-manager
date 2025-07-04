import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import {Route,Routes} from 'react-router-dom';
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import React from "react";



function App() {
  

  return (
    <Box minH={"100vh"} bg={useColorModeValue("black.900","gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
    </Box>
  )
}

export default App
