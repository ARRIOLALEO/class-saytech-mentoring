import { useContext } from "react";
import { GlovalState } from "../context/GlovalContext";
const Header = () => {
  const reducer = useContext(GlovalState);
  return <h1>this is my header {reducer}</h1>;
};

export default Header;
