import { useContext } from "react";
import { GlovalContext } from "../context/GlovalContext";
const Counter = () => {
  const [counter, setCounter] = useContext(GlovalContext);
  return (
    <>
      <div>
        <h1>{counter}</h1>
      </div>
      <button onClick={() => setCounter(counter + 1)}> Add One </button>
    </>
  );
};
export default Counter;
