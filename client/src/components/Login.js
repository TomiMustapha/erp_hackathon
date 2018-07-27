import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import '../style.css';

const axios = require('axios');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        axios
            .post('/users/login', { cred: this.state })
            .then(res => {
                window.location = '/';
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    updateState(evt, field) {
        switch (field) {
            case 'username':
                this.setState({ username: evt.target.value });
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
                        <h1>Login</h1>
                    </center>
                </Container>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                required
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                onChange={evt =>
                                    this.updateState(evt, 'username')
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                required
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
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
export default Login;
