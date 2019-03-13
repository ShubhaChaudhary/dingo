import React from 'react'
// import { Line } from 'react-chartjs-2'
import NVD3Chart from 'react-nvd3'
import axios from 'axios'
import * as actions from '../redux/action'
import { connect } from 'react-redux'

class LineChart extends React.Component {

  componentDidMount() {
    this.props.fetchdataBenchmarkChart({}, [{ "RemoveDate": 2019 }, { "RemoveDate": 2018 }, { "RemoveDate": 2017 }])
    this.props.tabChange('benchmark')
  }

  render() {

    const datum = [{ key: "Component Hours", values: this.props.benchmark[0], "bar": true }, { key: "Trakka Benchmark Component Hours", "color": "#f44253", values: this.props.benchmark[1] }]
    return (
      <NVD3Chart id="lineChart" type="linePlusBarChart" datum={datum} x="_id" y="count" context={{ focusEnable: false }} />
    )
  }
}

const mapStateToProps = state => ({

  benchmark: state.graph.benchmark

})


export default connect(mapStateToProps, actions)(LineChart)