import { useState } from "react";
import "./App.css";

function App() {
  
  const [stars, setStarts] = useState([0,1,2,3,4]);

  const [rate, setRate] = useState(localStorage.getItem('rate'));


  const handlerClick = (index) => {
    localStorage.setItem('rate',index)
    setRate(index)
  }

  const removeLocalStorage = () =>{
    localStorage.removeItem('rate')
    setRate(2)
  }

  return( <>
<h3>a beuitiful dress</h3>
  {
  stars.map((star,index)=>{
    return(

      <div style={{
        display:"inline-block",
        border:"1px solid black",
        padding:' 20px'
      }}

      className={index <= rate ? 'filled' : ''}    

      onClick={()=> handlerClick(index)}
      >
        {star}
      </div>
    )
  })}

  <button onClick={()=> removeLocalStorage()}> remove from local Storage</button>
  <h1>{rate}</h1>  
  </>
  )
}
export default App;
