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
          "color": "#f44253",
          values: [
            { _id: 0, count: 200 },
            { _id: 5000, count: 350 },
            { _id: 10000, count: 3000 },
            { _id: 15000, count: 2350 },
            { _id: 20000, count: 1500 },
            { _id: 25000, count: 1000 },
            { _id: 30000, count: 900 },
          ]
        }]
    }
  }


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