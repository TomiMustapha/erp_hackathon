import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import IncidentList from './components/IncidentList';
import IncidentButton from './components/IncidentButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <IncidentButton/>
        <IncidentList/>
      </div>
    );
  }
}
export default App;
