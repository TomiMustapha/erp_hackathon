import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import '../style.css';

const axios = require('axios');

class CreateIncident extends Component {
    constructor(props) {
        super(props);
        this.state = { category: 'Fire' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        const formData = new FormData();
        formData.append('file', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios
            .post('/incident', formData, config)
            .then(res => {
                if (
                    res &&
                    res.data &&
                    res.data.file &&
                    res.data.file.filename
                ) {
                    this.setState({ file: res.data.file.filename });
                    axios
                        .post('/incidents', this.state)
                        .then(res => {
                            console.log('Incident Reported!');
                            window.location = '/';
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
                console.log(res);
            })
            .catch(err => {
                alert('Try Again!');
            });
    }

    updateState(evt, field) {
        switch (field) {
            case 'title':
                this.setState({ title: evt.target.value });
                break;
            case 'category':
                console.log('This is target' + evt.target);
                this.setState({ category: evt.target.value });
                break;
            case 'description':
                this.setState({ description: evt.target.value });
                break;
            case 'date':
                this.setState({ date: evt.target.value });
                break;
            case 'location':
                this.setState({ location: evt.target.value });
                break;
            case 'file':
                this.setState({ file: evt.target.files[0] });
                break;
            default:
        }
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
                    <Form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                required
                                type="text"
                                name="title"
                                id="Title"
                                placeholder="Incident Title"
                                onChange={evt => this.updateState(evt, 'title')}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <Input
                                required
                                type="select"
                                name="select"
                                id="Category"
                                onChange={evt =>
                                    this.updateState(evt, 'category')
                                }
                            >
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
                                required
                                type="textarea"
                                name="description"
                                id="Description"
                                placeholder="Incident Description"
                                onChange={evt =>
                                    this.updateState(evt, 'description')
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input
                                type="date"
                                name="date"
                                id="Date"
                                placeholder="date placeholder"
                                onChange={evt => this.updateState(evt, 'date')}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location</Label>
                            <Input
                                type="text"
                                name="location"
                                id="Location"
                                onChange={evt =>
                                    this.updateState(evt, 'location')
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="File">Incident Image / Video</Label>
                            <Input
                                type="file"
                                name="file"
                                id="File"
                                onChange={evt => this.updateState(evt, 'file')}
                            />
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default CreateIncident;
