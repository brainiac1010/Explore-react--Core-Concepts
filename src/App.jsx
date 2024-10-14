
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './User'
import Friends from './friends'


function App() {
 

function HandelClick (){
  alert(" button haven click ")
}

const HandelClickAgain = () => {
  alert("it press again")
}

const addToFive = ( num )=>{
  alert(num+5);
}
  return (
    <>
      
      <h2>React core concept 2</h2>
      
<Users></Users>
<Friends></Friends>
      <Team></Team>
      <Counter></Counter>
      
      <button style={{pading :"20px",margin:"20px"}} onClick={HandelClick}>Press me</button>
    
    <button style={{pading :"20px",margin:"20px"}} onClick={HandelClickAgain}> press me again</button> 
    <button  onClick={()=> alert("click third time")}>third</button>
    <button onClick={()=>{addToFive(3)}}> Four</button>
    
    </>
  )
}

export default App
