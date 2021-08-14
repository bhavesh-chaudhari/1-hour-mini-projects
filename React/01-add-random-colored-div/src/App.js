import React,{useState} from 'react'
import './App.css'
import Div from './Components/Div'

const App = ()=>{

    const [count,setCount] = useState(2)
    const options = [];

    const getRandomColor=()=> {
     var colorArray = [
       "fuchsia",
       "tomato",
       "coral",
       "yellow",
       "red",
       "aqua",
       "lime",
       "lightcyan",
       "turquoise",
       "dodgerblue",
       "violet",
       "deeppink",
       "lightpink",
       "beige",
       "bisque",
       "cornsilk",
       "linen",
       "mintcream",
       "seashell",
       "honeydew",
       "azure",
       "whitesmoke",
       "crimson",
       "blueviolet",
       "gold",
       "blanchedalmond",
       "palegreen",
       "mediumspringgreen",
       "lightyellow",
       "moccasin",
       "mistyrose",
       "lavenderblush",
       "lavender",
       "oldlace",
       "aliceblue",
       "ivory",
       "snow",
       "gainsboro"
     ];
      let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
      return randomColor;
    }

    for(let i = 0; i < count;i++){
        var color = getRandomColor()
        options.push(<Div colorName={color} number={i + 1} color ={color} key={i} />)
    }

    const addDiv = ()=>{
        setCount(count + 1)
    }

    return (
      <>
        <div className="container">
          <button className="btn" onClick={()=>addDiv()} >Add Div</button>
          <div className="content">
            {options}
          </div>
          <button className="btn" onClick={()=>setCount(0)} >Clear All</button>
        </div>
      </>
    );
}

export default App;