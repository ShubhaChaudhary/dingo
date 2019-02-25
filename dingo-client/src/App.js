import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Header from './components/Header'
import Filter from './components/Filter'
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import Login from './components/Login'
=======
// import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Benchmark from './components/Benchmark'
import Performance from './components/Performance'

>>>>>>> 15afb3d52b040a73ae822508c28ae2f46ca04c9f
class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Header />

        <div id="filter-container">
          <h2>Filter</h2>
          <hr />
          <Filter />
        </div>


        <div id="charts">

          {/* <BarChart /> */}
          <Login />
        </div>
=======
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Login}/>
                <Route exact path="/Benchmark" component={Benchmark}/>
                <Route exact path="/Performance" component={Performance}/>
            </React.Fragment>
        </Router>    
>>>>>>> 15afb3d52b040a73ae822508c28ae2f46ca04c9f
      </div>
    );
  }
}

export default App;
