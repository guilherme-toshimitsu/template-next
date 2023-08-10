"use client";

import { createContext } from "react";
import state from "./Reducer/state";

const ExampleContext = createContext({ ...state });
const ExampleProvider = ExampleContext.Provider;
const ExampleConsumer = ExampleContext.Consumer;

export default ExampleContext;
export { ExampleConsumer, ExampleProvider, ExampleContext };
