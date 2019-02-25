import React from 'react'
import Filter from './Filter'
import LineChart from './LineChart'
import Header from './Header'

export default () => {
    return ( 
        <React.Fragment> 
        <Header />
        <div id="filter-container">
          <h2>Filter</h2>
          <hr />
          <Filter />
        </div>


        <div id="charts">

          <LineChart />
        </div>
        </React.Fragment>
    )
}