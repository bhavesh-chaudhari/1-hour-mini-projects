import React from 'react'
// npm install --save react-chartjs-2 chart.js
// # or
// yarn add react-chartjs-2 chart.js
// Import Chart Types
import { Doughnut, Pie, Line, Bar, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2'

const Chart = (props)=>{

    const {chartType} = props

    const Map = {
      "pie": Pie,
      "line": Line,
      "bar": Bar,
      "doughnut": Doughnut,
      "radar" : Radar,
      "polarArea": PolarArea
    };

    let type = chartType;
    // console.log(type);
    let TagName = Map[type]

    return (
      <div className="main-chart">
        <div
          className="bar-chart-container"
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          {/* Parent container with `relative position and dedicated to chart only`
        is important for canvas size changes and responsiveness.
        Read More here - https://www.chartjs.org/docs/3.2.1/configuration/responsive.html#important-note */}

          <TagName
            className="bar-chart"
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    );
}

export default Chart;