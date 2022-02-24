import { useContext } from "react";
import { GlovalContext } from "../context/GlovalContext";
const CounterTwo = () => {
  const [counter] = useContext(GlovalContext);
  return <h2> this data is retrived from the gloval context {counter} </h2>;
};

export default CounterTwo;
