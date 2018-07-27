import React, {Component} from 'react'
import { ListGroup, ListGroupItem, Button,Container } from 'reactstrap';

class IncidentList extends Component {
    render(){
        return(
            <div>
                <ListGroup>
                    <ListGroupItem>
                    <Container fluid>
                <center>
                <h1 className="display-3">Report an Incident</h1>
                <p className="lead">
                    <Button size="lg" color="danger">Click Here to Report an Incident</Button>
                </p>
                </center>
                </Container>
                    </ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}
export default IncidentList;