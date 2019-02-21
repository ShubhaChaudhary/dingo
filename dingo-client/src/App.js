import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Filter from './components/Filter'
import BarChart from "./components/BarChart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div id="filter-container">
          <h2>Filter</h2>
          <hr />
          <Filter />
        </div>


        <div id="charts">

          <BarChart />
        </div>
      </div>
    );
  }
}

export default App;
