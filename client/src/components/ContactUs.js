import React, { Component } from 'react';
import {Alert, Container} from 'reactstrap'
class ContactUs extends Component {

    render() {
        return (
            <div>
            <h1>Contact Us</h1>
            <Container>
            <Alert color="info">
            CAIRS is a program run by ERP as part of the Air Force program. 
            <br />
            For more information about that program, and all other ERP initiatives please visit erp.ngo.
            <br />
            For any concerns about using the app, please email us at CAIRS@erp.ngo.
            </Alert>
            </Container>
            </div>
        );
    }
}
export default ContactUs;