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
        let share =
            'https://evening-journey-64525.herokuapp.com/incidentPage/' +
            this.props.id;
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
                        <div className="mr-2">
                            <a
                                className="mr-2"
                                href={`https://www.facebook.com/sharer/sharer.php?u=${share}`}
                                target="_blank"
                            >
                                <img
                                    src={`https://png.icons8.com/color/25/000000/facebook.png`}
                                />
                            </a>
                            <a
                                className="mr-2"
                                href={`https://twitter.com/intent/tweet?url=${share}`}
                                target="_blank"
                            >
                                <img
                                    src={`https://png.icons8.com/color/25/000000/twitter.png`}
                                />
                            </a>
                            <a
                                className="mr-2"
                                href={`https://plus.google.com/share?url=${share}`}
                                target="_blank"
                            >
                                <img
                                    src={`https://png.icons8.com/color/25/000000/google-plus.png`}
                                />
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default Incident;
