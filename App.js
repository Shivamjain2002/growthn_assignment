import React from "react"
import {useState,useEffect} from 'react'
import randomWords from 'random-words'
const n=200
const SECONDS=60

//import logo from './logo.svg';
//import './App.css';
//import FC from "./Components/FunctionalComp"
//import {ClassComp,ClassComp1} from "./Components/ClassComp"
function App() {
  const [words,setWords]=useState([])
  useEffect(()=>{
    setWords(generateWords())
  },[])
  function generateWords(){
    return new Array(n).fill(null).map(()=>randomWords)
  }
  return (
    <div className="App">
      <div className='section'>
        <div className="card">
          <div className="card-content">
            <div className="content">
              {words.map((word,i)=>(
                <span>
                  {word} 
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    
//     <form >
//       <h1>
//   <label>
//     Roll Number:
//     <input type="number" rno="rollnumber" />
//   </label>
//   </h1>
//   <h2>
//   <label>
//     Uplaod Image:
//     <input type="file" /> 
//   </label>
//   </h2>
//   {/* <input type="submit" value="Submit" /> */}
// </form>


  );
}

export default App;
