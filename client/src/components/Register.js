import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import '../style.css';

const axios = require('axios');

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        axios
            .post('/users', { user: this.state })
            .then(res => {
                window.location = '/';
                console.log(res);
                if (res.data.success) {
                }
            })
            .catch(err => {
                console.log('Try again');
            });
    }

    updateState(evt, field) {
        switch (field) {
            case 'firstName':
                this.setState({ firstName: evt.target.value });
                break;
            case 'lastName':
                this.setState({ lastName: evt.target.value });
                break;
            case 'username':
                this.setState({ username: evt.target.value });
                break;
            case 'email':
                this.setState({ email: evt.target.value });
                break;
            case 'password':
                this.setState({ password: evt.target.value });
                break;
            default:
        }
    }

    render() {
        return (
            <div className="header">
                <Container>
                    <center>
                        <h1>Register</h1>
                    </center>
                </Container>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                required
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                onChange={evt =>
                                    this.updateState(evt, 'firstName')
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                onChange={evt =>
                                    this.updateState(evt, 'lastName')
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                required
                                placeholder="Username"
                                type="text"
                                name="username"
                                onChange={evt =>
                                    this.updateState(evt, 'username')
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                required
                                placeholder="Email"
                                type="email"
                                name="email"
                                onChange={evt => this.updateState(evt, 'email')}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                required
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={evt =>
                                    this.updateState(evt, 'password')
                                }
                            />
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Register;
