"use client";
import Image from "next/image";
// import  from "@chakra-ui/next-js";
import { Box, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import MainHome from "./Home";
// import { Provider } from "react-redux";
// import store from "../app/redux/store";
export default function Home() {
  return (
    <ChakraProvider>
      {/* <Provider store={store}> */}
        <MainHome />


      {/* </Provider> */}
    </ChakraProvider>
  );
}
