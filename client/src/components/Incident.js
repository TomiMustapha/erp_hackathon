import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Badge,
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

const axios = require('axios');

class Incident extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location);
    }

    render() {
        let url = '/incident/' + this.props.file;
        console.log(this.props.location);
        return (
            <div width="500px">
                <Card width="50%" className="mx-auto" fluid>
                    <CardBody width="50%">
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>
                            <Badge color="primary">{this.props.category}</Badge>
                            <br/>
                            <Badge color="secondary">{this.props.location}</Badge>
                            <br/>
                            <Badge color="info">{this.props.date}</Badge>
                        </CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                        <img width="50%" src={url} alt="Card image cap" />
                        <br />
                        <br />

                        <Button
                            href={`/IncidentPage/${this.props.id}`}
                            color="secondary"
                        >
                            View More
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default Incident;
