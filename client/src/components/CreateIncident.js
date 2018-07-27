import React, { Component } from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';
import '../CreateIncident.css';

const axios = require('axios');

class CreateIncident extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        axios
            .post('/incidents', {})
            .then(res => {
                console.log('Incident successfully created!');
            })
            .catch(err => {
                alert('Try Again!');
            });
    }

    render() {
        return (
            <div className="header">
                <Container>
                    <center>
                        <h1>Create Incident</h1>
                    </center>
                </Container>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="Title"
                                placeholder="Incident Title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <Input type="select" name="select" id="Category">
                                <option>Fire</option>
                                <option>Broken Fence</option>
                                <option>Vehicle in Park</option>
                                <option>Elephant out of Park</option>
                                <option>Rhino out of Park</option>
                                <option>Unidentified Person in Park</option>
                                <option>Other</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">
                                Describe the incident
                            </Label>
                            <Input
                                type="textarea"
                                name="description"
                                id="Description"
                                placeholder="Incident Description"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input
                                type="date"
                                name="date"
                                id="Date"
                                placeholder="date placeholder"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location</Label>
                            <Input type="text" name="location" id="Location" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="File">Incident Image / Video</Label>
                            <Input type="file" name="file" id="File" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default CreateIncident;
