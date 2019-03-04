import React from 'react'
// import { Line } from 'react-chartjs-2'
import NVD3Chart from 'react-nvd3'

class LineChart extends React.Component {
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


  datum = function () {
    var sin = [],
      cos = [];

    for (var i = 0; i < 100; i++) {
      sin.push({ x: i, y: Math.sin(i / 10) });
      cos.push({ x: i, y: .5 * Math.cos(i / 10) });
    }

    return [
      {
        values: sin,
        key: 'Sine Wave',
        color: '#ff7f0e'
      },
      {
        values: cos,
        key: 'Cosine Wave',
        color: '#2ca02c'
      }
    ];
  }



  render() {


    return (
      <NVD3Chart id="lineChart" type="lineChart" datum={this.datum} x="label" y="value" />
    )
  }
}


export default LineChart