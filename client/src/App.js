import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import IncidentList from './components/IncidentList';
import IncidentButton from './components/IncidentButton';
import CreateIncident from './components/CreateIncident';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppNavbar />
                <CreateIncident />
                {/* <IncidentButton/>
        <IncidentList/> */}
            </div>
        );
    }
}
export default App;
