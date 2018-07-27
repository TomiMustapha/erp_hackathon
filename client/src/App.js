import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import IncidentList from './components/IncidentList';
import IncidentButton from './components/IncidentButton';
import CreateIncident from './components/CreateIncident';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppNavbar />
                <Login />
                {/* <IncidentButton/>
        <IncidentList/> */}
            </div>
        );
    }
}
export default App;
