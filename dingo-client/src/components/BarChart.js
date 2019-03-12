import React from 'react'
import NVD3Chart from 'react-nvd3'
import axios from 'axios'



class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datum: []
        }

    }

    async fetchData() {
        const res = await axios.get('http://localhost:3001/data/performance')
        const { data } = await res
        this.setState({ datum: [{ key: "AVG Component hours", values: data[0] }, { key: "AVG Trakka Component Hours", "color": "#f44253", values: data[1] }] })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {

        return (
            <NVD3Chart id="barChart" type="multiBarChart" datum={this.state.datum} x="_id" y="AVG" />
        )
    }
}

export default BarChart