import { createContext, useState } from "react";

export const GlovalContext = createContext(null);

export const GlovalProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const data = [counter, setCounter];
  return <GlovalContext.Provider value={data}>{children}</GlovalContext.Provider>;
};
