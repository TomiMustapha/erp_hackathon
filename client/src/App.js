import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import AppNavbar from './components/AppNavbar';
import IncidentList from './components/IncidentList';
import IncidentButton from './components/IncidentButton';
import CreateIncident from './components/CreateIncident';
import Register from './components/Register';
import Login from './components/Login';
import IncidentPage from './components/IncidentPage';

class App extends Component {
    render() {
        return (
          <Router>
            <div className="App">
                <AppNavbar />
                <Route exact path="/" component={IncidentButton} />
                <Route exact path="/" component={IncidentList} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/ReportPage" component={CreateIncident} />
                <Route exact path="/login" component={Login} />
                <Route path="/IncidentPage/:id" component={IncidentPage} />
                
                
            </div>
            </Router>
        );
    }
}
export default App;
