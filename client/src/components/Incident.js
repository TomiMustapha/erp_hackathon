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

const axios = require('axios');

class Incident extends Component {
    constructor(props) {
        super(props);
    }
    getImage(file) {}
    render() {
        return (
            <div width="500px">
                <Card width="50%" className="mx-auto" fluid>
                    <CardBody width="50%">
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>
                            <Badge color="primary">{this.props.category}</Badge>
                        </CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                        <img
                            width="50%"
                            src={this.getImage(this.props.file)}
                            alt="Card image cap"
                        />
                        <br />
                        <br />
                        <Button color="secondary">Button</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default Incident;
