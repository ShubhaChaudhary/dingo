import React from 'react'
import NVD3Chart from 'react-nvd3'
import axios from 'axios'
import store from '../redux/store'
import { setUserBenchmarkData } from '../redux/action'


class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datum: []
        }

    }

    async fetchData() {
        const res = await axios.get('http://localhost:3001/data/dashboard')
        const { data } = await res
        this.setState({ datum: [{ key: "Component Health", values: data }] })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {

        return (
            <NVD3Chart id="barChart" type="discreteBarChart" datum={this.state.datum} x="_id" y="count" />
        )
    }
}

export default BarChart