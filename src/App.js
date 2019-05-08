import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import AddNewDevice from './components/AddNewDevice';

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark" style={{ backgroundColor: '#dbc441' }}>
          <a className="navbar-brand text-dark" href="#">Title</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link text-dark" href="#Home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#Add">Add Device</a>
              </li>
            </ul>
          </div>
        </nav>
        <AddNewDevice />
      </Fragment>
    );
  }
}

export default App;
