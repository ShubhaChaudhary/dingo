import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Benchmark from './components/Benchmark'
import Performance from './components/Performance'
import Header from './components/Header'
import Filter from './components/Filter';
import TabBar from "./components/TabBar";
import { connect } from 'react-redux'
import { relativeTimeRounding } from 'moment';

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.access_token && <Header />}
        {this.props.access_token && <Filter/>}

        <Router>
          <div id='content'>
          {this.props.access_token &&  <TabBar />}

            <Route exact path='/' render={() => {
              if (localStorage.getItem('token')) {
                return (<Redirect to="/benchmark" />)
              } else {
                return (<Login />)
              }
            }} />

            <Route exact path='/benchmark' render={() => {
              if (localStorage.getItem('token')) {
                return (<Benchmark />)
              } else {
                return (<Redirect to="/" />)
              }
            }} />


            <Route exact path='/performance' render={() => {
              if (localStorage.getItem('token')) {
                return (< Performance />)
              } else {
                return (<Redirect to="/" />)
              }
            }} />

            {/* <Route exact path="/performance" component={Performance} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  access_token: state.auth.access_token,
  
})
export default connect(mapStateToProps)(App);

