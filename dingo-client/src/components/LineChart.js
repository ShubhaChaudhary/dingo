import React from 'react'
// import { Line } from 'react-chartjs-2'
import NVD3Chart from 'react-nvd3'
import axios from 'axios'
class LineChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      datum: [
        {
          key: 'test',
          "bar": true,
          "color": "#ccf",
          values: [
            { _id: 0, count: 200 },
            { _id: 5000, count: 350 },
            { _id: 10000, count: 3000 },
            { _id: 15000, count: 2350 },
            { _id: 20000, count: 1500 },
          ]
        }]
    }
  }

  // datum = function () {
  //   var sin = [],
  //     cos = [];

  //   for (var i = 0; i < 100; i++) {
  //     sin.push({ x: i, y: Math.sin(i / 10) });
  //     cos.push({ x: i, y: .5 * Math.cos(i / 10) });
  //   }

  //   return [
  //     {
  //       values: sin,
  //       key: 'Sine Wave',
  //       color: '#ff7f0e'
  //     },
  //     {
  //       values: cos,
  //       key: 'Cosine Wave',
  //       color: '#2ca02c'
  //     }
  //   ];
  // }

  // This async function fetches and pupulates the chart on the later date.
  // It fixed the bug where you had to press twice on the tab to get chart pupulated.
  async fetchData() {
    // fetch data from the server
    const res = await axios.get('http://localhost:3001/data/dashboard')
    // extract the payload
    const { data } = await res
    // insert the payload ninto the state.
    this.setState({ datum: [{ key: "Component Health", values: data }] })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {


    return (
      <NVD3Chart id="lineChart" type="linePlusBarChart" datum={this.state.datum} x="_id" y="count" />
    )
  }
}


export default LineChart