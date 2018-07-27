import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import Incident from './Incident';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const axios = require('axios');
const url = 'http://localhost:8080';

class IncidentList extends Component {
    componentDidMount() {
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
                    <Breadcrumb>
                        <BreadcrumbItem className="mx-auto">
                            <p className="text-danger">
                                In the Event Of An Emergency Contact Local
                                Police First
                            </p>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Container>
                <center>
                    <h1>Recent Incidents</h1>
                </center>
                <Container width="500px">
                    <ListGroup className="mx-auto">
                        {items.map(
                            ({
                                id,
                                title,
                                category,
                                description,
                                file,
                                date,
                                createdAt
                            }) => (
                                <ListGroupItem fluid>
                                    <Incident
                                        key={id}
                                        title={title}
                                        category={category}
                                        description={description}
                                        file={file}
                                        date={date}
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
