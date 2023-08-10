"use client";

import { useContext } from "react";
import ExampleWrapper from "./Wrapper";
import { ExampleContext } from "./Context";

const useExample = () => useContext(ExampleContext);

export default ExampleWrapper;
export { useExample };
