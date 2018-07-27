import React, { Component } from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Badge,
    Container,
    Alert
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

    render() {
        const { item } = this.state;
        console.log(item);
        let url = '/incident/' + item.file;
        return (
            <div>
                <Container>
                    <center>
                        <h1>{item.title}</h1>
                        <img width="50%" src={url} alt="Card image cap" />
                        <br></br>
                        <Badge color="primary">{item.category}</Badge>
                        <Alert  color="primary">
                            {item.description}
                        </Alert>
                    </center>
                </Container> 
            </div>
        );
    }
}
export default IncidentPage;
