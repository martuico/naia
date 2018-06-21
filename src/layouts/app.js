import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
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
              <HashRouter>
                <Switch>
                  <Route path="/" component={DashboardPage}></Route>
                </Switch>
              </HashRouter>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
