import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AddNewDevice from './components/AddNewDevice/AddNewDevice';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
        <nav className="main-header__nav">
            <ul className="main-header__item-list">
                {/* <li><a className="active" href="/">Home</a></li> */}
                <li className="main-header__item"><a className="active" href="/">Home</a></li>
                <li className="main-header__item"><a href="/admin/addNewDevice">Add Device</a></li>
            </ul>
        </nav>
        </header>

          <AddNewDevice/>
      </div>
    );
  }
}

export default App;
