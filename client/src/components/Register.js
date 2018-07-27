import React, { Component } from 'react';
import '../Register.css';

const axios = require('axios');
const url = 'http://localhost:8080';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        axios({
            url: url + '/users',
            method: 'post',
            data: {
                user: this.state
            }
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
            <div className="Register">
                <header className="Register-header">
                    <h1 className="Register-title">Register</h1>
                </header>
                <div align="center" className="regForm">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input
                                required
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                onChange={evt =>
                                    this.updateState(evt, 'firstName')
                                }
                            />
                        </label>
                        <br />
                        <label>
                            <input
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                onChange={evt =>
                                    this.updateState(evt, 'lastName')
                                }
                            />
                        </label>
                        <br />
                        <label>
                            <input
                                required
                                placeholder="Username"
                                type="text"
                                name="username"
                                onChange={evt =>
                                    this.updateState(evt, 'username')
                                }
                            />
                        </label>
                        <br />
                        <label>
                            <input
                                required
                                placeholder="Email"
                                type="email"
                                name="email"
                                onChange={evt => this.updateState(evt, 'email')}
                            />
                        </label>
                        <br />
                        <label>
                            <input
                                required
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={evt =>
                                    this.updateState(evt, 'password')
                                }
                            />
                        </label>
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
