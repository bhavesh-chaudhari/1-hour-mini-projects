import React from 'react'
import "./Chart.css"
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

    // const myLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] 

      const myLabels = []
      const sumData = [];
      const productData = [];
      const myBackgroundColors = []
      let sum = 0
      let color = ""
      for(let i = 1;i < 31;i++){
        sum += i;
        color = `hsla(${360/30*i},100%,70%,0.7)`;
        myLabels.push(i)
        sumData.push(sum)
        myBackgroundColors.push(color)
      }
      // console.log(myLabels)
      // console.log(sumData);
      // console.log(myBackgroundColors)


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
              labels: myLabels,
              datasets: [
                {
                  label: "  sum ",
                  data: sumData,
                  backgroundColor: myBackgroundColors,
                  borderColor: myBackgroundColors.reverse(),
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: "Variation in Sum of First 30 Natural Numbers",
                  padding: {
                    top: 20,
                    bottom: 20,
                  },
                  font: {
                    size: 20,
                  },
                },
                legend: {
                  labels: {
                    // This more specific font property overrides the global property
                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    );
}

export default Chart;