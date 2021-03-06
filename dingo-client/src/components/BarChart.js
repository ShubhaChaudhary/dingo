import React from 'react'
import NVD3Chart from 'react-nvd3'
import { connect } from 'react-redux'
import * as actions from '../redux/action'


class BarChart extends React.Component {
    // render the component first time with given inital data
    componentDidMount() {
        this.props.fetchdataPerformancechart({}, [{ "RemoveDate": 2019 }, { "RemoveDate": 2018 }, { "RemoveDate": 2017 }])
        this.props.tabChange('performance')
    }

    render() {
        // update the graph value with state change in redux-store
        const datum = [{ key: "AVG Component hours", values: this.props.performance[0] }, { key: "AVG Trakka Component Hours", "color": "#f44253", values: this.props.performance[1] }]
        return (
            <NVD3Chart id="barChart" type="multiBarChart" datum={datum} x="_id" y="AVG" />
        )
    }
}

const mapStateToProps = state => ({

    performance: state.graph.performance

})

export default connect(mapStateToProps, actions)(BarChart)