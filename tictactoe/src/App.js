import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { id: 1, field: "" },
    { id: 2, field: "" },
    { id: 3, field: "" },
    { id: 4, field: "" },
    { id: 5, field: "" },
    { id: 6, field: "" },
    { id: 7, field: "" },
    { id: 8, field: "" },
    { id: 9, field: "" },
  ]); // this state track the turn
  const [turn, setTurn] = useState(false);

  const results = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const [forX, setForX] = useState([]);
  const [forY, setForY] = useState([]);

  const handleClick = (index) => {
    // asign the simbol depending of the turn
    //
    const exOrCero = turn ? "0" : "x";
    const indexFromData = data.findIndex((element) => element.id == index);

    //Updating my data
    const newData = [
      ...data.slice(0, indexFromData),
      { id: index, field: exOrCero },
      ...data.slice(indexFromData + 1),
    ];

    setData(newData);
    setTurn((prev) => !prev);
    if (exOrCero === "x") {
      setForX((prev) => [...prev, index]);
    } else {
      setForY((prev) => [...prev, index]);
    }
  };

  const checkIfThereIsAWinner = () => {};

  useEffect(() => {
    if (forX.length) {
      for (let result of results) {
        if (forX.length >= 3) {
          if (forX.sort().join("").includes(result.sort().join(""))) {
            console.log("winner is X");
          }
        }
        if (forY.length >= 3) {
          if (forY.sort().join("").includes(result.sort().join(""))) {
            console.log("the winner is O");
          }
        }
      }
    }
  }, [forY, forX]);

  return (
    <div className="App">
      <div className="board">
        <h1> Tic Tac Toe</h1>
        {data.map((square) => {
          return (
            <div
              key={"suqare" + square.id}
              className="square"
              onClick={() => handleClick(square.id)}
            >
              {square.field}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
