import React, {useState} from 'react'
import './App.css'
import Chart from './components/Chart'

const App = ()=>{

    const [value,setValue] = useState("bar")

    const handleChange = (e)=>{
        e.preventDefault()
        // console.log(e.target.value)
        setValue(e.target.value)
    }

    return (
      <div className="app">
        <Chart chartType={value}></Chart>
        <div className="select">
          <select
            name="charts"
            value={value}
            id="charts"
            onChange={handleChange}
          >
            <option value="bar">Bar Chart</option>
            <option value="line">Line Chart</option>
            <option value="pie">Pie Chart</option>
            <option value="doughnut">Doughnut Chart</option>
            <option value="polarArea">Polar Area Chart</option>
            <option value="radar">Radar Chart</option>
          </select>
        </div>
      </div>
    );
}

export default App;