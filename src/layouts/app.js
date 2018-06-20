import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainHeader  from './components/header'
import DashboardPage from '../pages/dashboard'
import MainSideBar from './components/sidebar';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader></MainHeader>
        <div className="container-fluid">
          <div className="row flex-xl-nowrap main-body">
            <MainSideBar></MainSideBar>
            <main className="bd-content">
              <Router>
                <Route path="/" component={DashboardPage}></Route>
              </Router>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
