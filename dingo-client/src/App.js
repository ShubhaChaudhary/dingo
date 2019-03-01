import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Benchmark from './components/Benchmark'
import Performance from './components/Performance'
import Header from './components/Header'
import Filter from './components/Filter';
import TabBar from "./components/TabBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />

        <Router>
          <div id='content'>
            <TabBar />
            <Route exact path="/" component={Login} />
            <Route exact path="/benchmark" component={Benchmark} />
            <Route exact path="/performance" component={Performance} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

