import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
// import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Benchmark from './components/Benchmark'
import Performance from './components/Performance'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Login}/>
                <Route exact path="/Benchmark" component={Benchmark}/>
                <Route exact path="/Performance" component={Performance}/>
            </React.Fragment>
        </Router>    
      </div>
    );
  }
}

export default App;
