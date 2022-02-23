import React, { useEffect, useState } from "react";

const App = () => {
    const [flag, setFlag] = useState(false);
    const [forX, setForX] = useState([]);
    const [forO, setForO] = useState([]);
    const [winner, setWinner] = useState("Game is on...");

    const [data, setData] = useState([
        { id: 1, field: "1" },
        { id: 2, field: "2" },
        { id: 3, field: "3" },
        { id: 4, field: "4" },
        { id: 5, field: "5" },
        { id: 6, field: "6" },
        { id: 7, field: "7" },
        { id: 8, field: "8" },
        { id: 9, field: "9" },
    ]);
    const result = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [1, 5, 9],
    ];
    const handleClick = (e) => {
        let newData = [...data];
        // const ind = newData.findIndex((item) => item.id === e);
        if (!flag) {
            newData[e - 1]["field"] = "X";
            setFlag(!flag);
            setData(newData);
            setForX([...forX, e]);
        } else {
            newData[e - 1]["field"] = "O";
            setFlag(!flag);
            setData(newData);
            setForO([...forO, e]);
        }
    };
    console.log(forO, "OOOO");
    console.log(forX, "XXXX");

    function forLongerStreaks(arr1, arr2) {
        let counter = 0;
        for (let i of arr2) {
            if (arr1.join("").includes(`${i}`)) {
                counter++;
            }
        }
        return counter === 3 ? true : false;
    }
    useEffect(() => {
        console.log("useeffffff");
        if (forX.length) {
            console.log("inside if useeff");
            for (let i of result) {
                if (
                    forLongerStreaks(forX, i) ||
                    (forX.length >= 3 && forX.sort().join("").includes(i.join("")))
                ) {
                    setWinner("X winner");
                }
                if (
                    forLongerStreaks(forO, i) ||
                    (forO.length >= 3 && forO.sort().join("").includes(i.join("")))
                ) {
                    setWinner("O winner");
                }
            }
        }
    }, [forX, forO]);
    return (
        <div style={{ width: "400px" }} className="m-auto">
            {data.map((i) => {
                return (
                    <div
                        style={{
                            width: "130px",
                            border: "1px solid black",
                            display: "inline-block",
                            height: "130px",
                            fontSize: "3rem",
                        }}
                        onClick={() => handleClick(i.id)}
                    >
                        {i.field}
                    </div>
                );
            })}
            <div>{winner}</div>
        </div>
    );
};
export default App;
