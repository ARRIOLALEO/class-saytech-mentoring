import { createContext, useState } from "react";

const initialState = 0;

export const GlovalState = createContext(initialState);

export const GlovalProvider = ({ children }) => {
  return <GlovalState.Provider value={initialState}>{children}</GlovalState.Provider>;
};
