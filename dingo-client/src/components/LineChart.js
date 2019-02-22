import React from 'react'
import { Line } from 'react-chartjs-2'

class LineChart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chartData: {
                labels: [
                    '0 - 999',
                    '1000 - 1999',
                    '2000 - 2999',
                    '3000 - 3999'
                ],
                datasets: [{
                    label: 'Component life span',
                    data: [3, 4, 2, 5],
                    backgroundColor: '#313de8'
                }]

            }
        }
    }

    render() {

        return (
            <Line data={this.state.chartData} />
        )
    }
}

export default LineChart