import React from 'react'
import { Bar } from 'react-chartjs-2'

class BarChart extends React.Component {
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
                    backgroundColor: 'red'
                }]

            }
        }
    }

    render() {
        return (
            <Bar data={this.state.chartData} />
        )
    }
}

export default BarChart