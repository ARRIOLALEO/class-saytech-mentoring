import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [stars, setStars] = useState(Array.from(Array(5).keys()));
  const [indHover, setIndHover] = useState(localStorage.getItem("clicks"));
  const [clickFlag, setClick] = useState(false);
  const handleClick = (e) => {
    setIndHover(e);
    setClick(true);
    localStorage.setItem("clicks", e);
  };
  const handleHover = (e) => {
    setIndHover(e);
    if (clickFlag) {
      setClick(false);
    }
  };
  const handleLeave = () => {
    if (!clickFlag) {
      setIndHover(0);
    }
  };
  const emoji = (ind) => {
    if (ind === 5) {
      return <div>:D</div>;
    }
    if (ind === 4) {
      return <div>:|</div>;
    }
  };
  console.log(typeof indHover);
  return (
    <>
      {stars.map((i, ind) => {
        return (
          <div
            className={ind <= indHover ? "filled" : ""}
            onMouseOver={() => handleHover(ind)}
            onMouseLeave={handleLeave}
            style={{
              display: "inline-block",
              border: "1px solid black",
              padding: "20px",
            }}
            onClick={() => handleClick(ind)}
          >
            {i}
          </div>
        );
      })}
      <div>
        {indHover + 1}/{stars.length}
      </div>
      <div>{emoji(indHover + 1)}</div>
    </>
  );
};
export default App;
