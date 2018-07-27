import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import Incident from './Incident';
import { Alert } from 'reactstrap';

const axios = require('axios');
const url = 'http://localhost:8080';

class IncidentList extends Component {
    componentWillMount() {
        this.getIncidents();
    }
    constructor(props) {
        super(props);
    }
    state = {
        items: []
    };
    getIncidents() {
        axios
            .get('/incidents')
            .then(res => {
                console.log(res);
                if (res.data) {
                    this.setState((this.state.items = res.data));
                }
            })
            .catch(err => {});
    }
    render() {
        const { items } = this.state;
        return (
            <div>
                <Container>
                <Alert color="danger">In the event of an emergency contact local police first</Alert>
                </Container>
                <center>
                    <h1>Recent Incidents</h1>
                </center>
                <Container width="500px">
                    <ListGroup className="mx-auto">
                        {items.map(
                            ({
                                _id,
                                title,
                                category,
                                description,
                                file,
                                date,
                                location,
                                createdAt
                            }) => (
                                <ListGroupItem fluid>
                                    <Incident
                                        key={_id}
                                        id={_id}
                                        title={title}
                                        category={category}
                                        description={description}
                                        file={file}
                                        date={date}
                                        location={location}
                                    />
                                </ListGroupItem>
                            )
                        )}
                    </ListGroup>
                </Container>
            </div>
        );
    }
}
export default IncidentList;
