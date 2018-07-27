import React, {Component} from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

class IncidentButton extends Component{
    render(){
        return (
            <div>
            <Jumbotron fluid>
                <Container fluid>
                <center>
                <h1 className="display-3">Report an Incident</h1>
                <p className="lead">
                    <Button size="lg" href="/ReportPage" color="danger">Click Here to Report an Incident</Button>
                </p>
                </center>
                </Container>
            </Jumbotron>
            </div>
        );
    }
}

export default IncidentButton;