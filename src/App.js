import './App.css';

import { useState } from "react"

function App() {
  const [color2,setColor] = useState("white");
    const click = (color2)=>{
        setColor(color2)
    }
  return (
    <div className="App">
      <div style={{backgroundColor:color2, color:color2 === "white"?"black":"white"}}>

<div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
    <h1 style={{marginLeft:"30rem"}}>Overreacted</h1>
    <button  onClick ={ () =>{click("black")}} style={{backgroundColor:"#FF0080", marginLeft:"10rem", color:"black"}} >Toggle</button>
</div>

<div style={{}}>
    <h3 style={{color:"#FF0080"}}>The WET Codbase</h3>
    <p>Sunday 4th, 2020 11 min read</p>
    <p>Come waste your time with me</p>
</div>

<div style={{marginTop:"3rem"}}>
    <h3 style={{color:"#FF0080"}}>Goodby, Clean Code</h3>
    <p>Friday 22nd, 2019 5 min read</p>
    <p>Let clean code guide you. Then let it go.</p>
</div>

<div style={{marginTop:"3rem"}}>
    <h3 style={{color:"#FF0080"}}>M Decade In Review</h3>
    <p>Saturday 11th, 2018 5 min read</p>
    <p>A personal reflection </p>
</div>

<div style={{marginTop:"3rem"}}>
    <h3 style={{color:"#FF0080"}}>What Are The React Team Principles</h3>
    <p>Thursday 4th, 2015 5 min read</p>
</div>

</div>
    </div>
  );
}

export default App;
