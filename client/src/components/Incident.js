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

    getImage(file) {
        axios
            .get('/incident/' + file)
            .then(res => {
                var b64 = btoa(res);
                var dataUrl = 'data:image/jpeg;charset=utf-8;base64,' + b64;
                console.log(dataUrl);
                return dataUrl;
            })
            .catch(err => console.log(err));
    }

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
