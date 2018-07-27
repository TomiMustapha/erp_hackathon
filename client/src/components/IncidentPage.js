import React, { Component } from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Badge,
    Container
} from 'reactstrap';
const axios = require('axios');

class IncidentPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        item: []
    };
    componentWillMount() {
        console.log(this.props.match.params.id);
        axios
        .get('/incidents/'+ this.props.match.params.id)
        .then(res => {
            console.log(res);
            if (res.data) {
                this.setState((this.state.item = res.data));
            }
        })
        .catch(err => {});
    };

    getImage(file) {
        axios
            .get('/incident/' + file)
            .then(res => {
               // console.log(readstream.pipe(res));
                var b64 = btoa(res);
                var dataUrl = 'data:image/jpeg;charset=utf-8;base64,' + b64;
                console.log(dataUrl);
                return dataUrl;
            })
            .catch(err => console.log(err));
    }

    render() {
        const { item } = this.state;
        console.log(item);
        return (
            <div width="500px">
                {/* <Card width="50%" className="mx-auto" fluid>
                    <CardBody width="50%">
                        <CardTitle>{item.title}</CardTitle>
                        <CardSubtitle>
                            <Badge color="primary">{item.category}</Badge>
                        </CardSubtitle>
                        <CardText>{item.description}</CardText>
                        <img
                            width="50%"
                            src={this.getImage(item.file)}
                            alt="Card image cap"
                        />
                        <br />
                        <br />
                        <Button color="secondary">Button</Button>
                    </CardBody>
                </Card> */}
                <Container>
                    <center>
                        <h1>{item.title}</h1>
                    </center>
                </Container> 
            </div>
        );
    }
}
export default IncidentPage;
