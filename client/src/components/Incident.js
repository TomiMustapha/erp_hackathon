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
import {Link} from 'react-router-dom'

const axios = require('axios');

class Incident extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let url = '/incident/' + this.props.file;
        return (
            <div width="500px">
                <Card width="50%" className="mx-auto" fluid>
                    <CardBody width="50%">
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>
                            <Badge color="primary">{this.props.category}</Badge>
                        </CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                        <Img width="50%" src={url} alt="Card image cap" />
                        <br />
                        <br />

                        <Button href={`/IncidentPage/${this.props.id}`} color="secondary">View More</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default Incident;
