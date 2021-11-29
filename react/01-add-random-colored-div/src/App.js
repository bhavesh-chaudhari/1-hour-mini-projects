import React, { useState, useEffect, useRef} from "react";
import "./App.css";
import Div from "./components/Div";

const App = () => {
  
  // useState() for keeping account of number of Divs
  const [count, setCount] = useState(3);
  const clrBtn = useRef(null)
  
  // An array for storing all the current Div Components
  const options = [];

  const getRandomColor = () => {
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
      "gainsboro",
    ];
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    return randomColor;
  };

  for (let i = 0; i < count; i++) {
    var color = getRandomColor();
    options.push(
      <Div colorName={color} number={i + 1} color={color} key={i} />
    );
  }

  const addDiv = () => {
    setCount(count + 1);
  };

  // Conditional Rendering
  const Para = () => {
    if (options.length === 0) {
      return <p>All divs were cleared.</p>;
    } else if (options.length === 1) {
      return <p>There is 1 Div.</p>;
    } else {
      return <p>There are {options.length} Divs.</p>;
    }
  };

  // should run after every change in count
  useEffect(()=>{
    if (options.length === 0) {
      clrBtn.current.style.display = "none";
    }
    else{
      clrBtn.current.style.display = "block";
    }
  },[count])

  return (
    <>
      <div className="container">
        <h1>Add Random Colored Div</h1>
        <Para></Para>
        <button className="btn" onClick={() => addDiv()}>
          Add Div
        </button>
        <div className="content">{options}</div>
        <button style={{display:"block"}} ref={clrBtn} className="btn" onClick={() => setCount(0)}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default App;
