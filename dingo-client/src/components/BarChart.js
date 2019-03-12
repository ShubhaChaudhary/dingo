import React from 'react'
import NVD3Chart from 'react-nvd3'
import axios from 'axios'
import {connect} from 'react-redux'
import * as actions from '../redux/action'


class BarChart extends React.Component {
    componentDidMount(){
        this.props.fetchdataPerformancechart()
    }
   
   
   
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         datum: []
    //     }

    // }

    // async fetchData() {
    //     const res = await axios.post('http://localhost:3001/data/performance',
    //         {
    //             "Site": localStorage.getItem('site'),
    //             filterData: {},
    //             Range: [{ "RemoveDate": 2019 }, { "RemoveDate": 2018 }, { "RemoveDate": 2017 }]
    //         }

    //     )
    //     const { data } = await res
    //     this.setState({ datum: [{ key: "AVG Component hours", values: data[0] }, { key: "AVG Trakka Component Hours", "color": "#f44253", values: data[1] }] })
    // }

    // componentDidMount() {
    //     this.fetchData()
    // }

    render() {
        // console.log(this.props.performance[0])
       const datum= [{ key: "AVG Component hours", values: this.props.performance[0] }, { key: "AVG Trakka Component Hours", "color": "#f44253", values: this.props.performance[1]}]
        return (
            <NVD3Chart id="barChart" type="multiBarChart" datum={datum} x="_id" y="AVG" />
        )
    }
}

const mapStateToProps = state => ({

    performance: state.graph.performance

})

export default connect(mapStateToProps,actions)(BarChart)