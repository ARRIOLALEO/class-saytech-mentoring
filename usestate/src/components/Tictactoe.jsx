import {useState,useEffect} from 'react'
function TictacToe(){
    const [board, setBoard] = useState([
        {id:1,field:"1"},
        {id:2,field:"2"},
        {id:3,field:"3"},
        {id:4,field:"4"},
        {id:5,field:"5"},
        {id:6,field:"6"},
        {id:7,field:"7"},
        {id:8,field:"8"},
        {id:9,field:"9"}
    ])
    
    const result = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [3,5,7],
        [1,5,9]
    ]

    function checkWinner (myArray , combinations){
        let counter = 0
        for(let element of combinations){

            if(myArray.indexOf(element) >= 0){
                counter++
            }
        }
        return counter
    }
    
    const [forX, setForX]  = useState([])

    const [forO, setForO] = useState([])

    const [winner,setWinner] = useState("Looking for a winner")
    useEffect(()=>{

        if(forX.length >=  3 ){
            for(let i = 0 ; i < result.length ; i++){
                let var1 = [...forX]

                const isAwinner = checkWinner(var1,result[i])

                if(isAwinner === 3 ){
                    setWinner("The winner is X")
                }
            }

            for(let i = 0 ; i < result.length ; i++){

                let var1 = [...forO]

                const isAwinner = checkWinner(var1,result[i])

                if(isAwinner === 3 ){
                    setWinner("The winner is O")

                  
                }
            }
        }
    })
  
    
    const [turn, setTurn ] = useState(true) 
    const [winnerBoard,setWinnerBoard] = useState([])    
    const handlerClick = (id) => {
     
    if(board[id-1].field !== "X" && board[id-1].field !== "O"){
        const simbol = turn ? "X" : "O"
        if(simbol === "X"){

            setForX([...forX,id])
        }else{
            setForO([...forO,id])
        }
        const newBoard = [...board]

        newBoard[id-1]["field"] = simbol

        setBoard(newBoard)
  
        setTurn(!turn)
    }
    }

    return(
        <>
        <h1>Tic Tac Toe</h1>
        <div className="board">
            {board.map((square)=>{
                return(<div key={"square" + square.id } onClick={()=> handlerClick(square.id)} style={{width:"130px",border:"1px solid black",display:"inline-block",height:"130px",fontSize:"3rem"}}>
                    {square.field}
                    </div>)
            })}
        </div>
        <h1>now is Playing {turn ? "X" :"0"}</h1>
        <h1>{winner}</h1>
        </>
    )
}

export default TictacToe