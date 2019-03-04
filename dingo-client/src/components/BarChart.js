import React from 'react'
// import { Bar } from 'react-chartjs-2'
import NVD3Chart from 'react-nvd3'
class BarChart extends React.Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         chartData: {
    //             labels: [
    //                 '0 - 999',
    //                 '1000 - 1999',
    //                 '2000 - 2999',
    //                 '3000 - 3999',
    //             ],
    //             datasets: [{
    //                 label: 'Component life span',
    //                 data: [3, 4, 14, 5],
    //                 backgroundColor: '#313de8'
    //             }]

    //         }
    //     }
    // }


    datum = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label": "A",
                    "value": -29.765957771107
                },
                {
                    "label": "B",
                    "value": 0
                },
                {
                    "label": "C",
                    "value": 32.807804682612
                },
                {
                    "label": "D",
                    "value": 196.45946739256
                },
                {
                    "label": "E",
                    "value": 0.19434030906893
                },
                {
                    "label": "F",
                    "value": -98.079782601442
                },
                {
                    "label": "G",
                    "value": -13.925743130903
                },
                {
                    "label": "H",
                    "value": -5.1387322875705
                }
            ]
        }
    ]



    render() {

        return (
            <NVD3Chart id="barChart" type="discreteBarChart" datum={this.datum} x="label" y="value" />
        )
    }
}

export default BarChart