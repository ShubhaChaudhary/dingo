import React from 'react'
// import { Line } from 'react-chartjs-2'
import NVD3Chart from 'react-nvd3'
import axios from 'axios'
class LineChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      datum: []
    }
  }



  // This async function fetches and pupulates the chart on the later date.
  // It fixed the bug where you had to press twice on the tab to get chart pupulated.
  async fetchData() {
    // fetch data from the server
    const res = await axios.post('http://localhost:3001/data/dashboard',
      {
        "Site": localStorage.getItem('site'),
        filterData: {},
        Range: [{ "RemoveDate": 2019 }, { "RemoveDate": 2018 }, { "RemoveDate": 2017 }]
      })
    // extract the payload
    const { data } = await res
    // insert the payload ninto the state.
    this.setState({
      datum: [

        { key: "Component Health", "bar": true, values: data[0] },

        { key: "Dingo Benchmark", "color": "#f44253", values: data[1] }
      ]
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {


    return (
      <NVD3Chart id="lineChart" type="linePlusBarChart" datum={this.state.datum} x="_id" y="count" context={{ focusEnable: false }} />
    )
  }
}


export default LineChart