"use client";

import React, { useReducer } from "react";
import { createReducer } from "@utils/createReducer";

import actions from "./Reducer/actions";
import initialState from "./Reducer/state";
import * as actionTypes from "./Reducer/actionTypes";

import { ExampleProvider } from "./Context";

const reducer = createReducer(actions);

const ActivitiesWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoadingTrue = () =>
    dispatch({ type: actionTypes.SET_IS_LOADING, isLoading: true });

  const setValue = (value) => {
    setLoadingTrue();
    dispatch({ type: actionTypes.SET_VALUE, value: value });
  };

  // Dispatcher
  const actionResolver = {
    setLoadingTrue: () => setLoadingTrue(),
    setValue: (val) => setValue(val),
  };

  return (
    <ExampleProvider value={[{ ...state }, actionResolver]}>
      {children}
    </ExampleProvider>
  );
};

export default ActivitiesWrapper;
