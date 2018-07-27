import React, {Component} from 'react'
import { ListGroup, ListGroupItem, Button,Container,Col } from 'reactstrap';
import Incident from './Incident';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import '../Register.css';

const axios = require('axios');
const url = 'http://localhost:8080';


class IncidentList extends Component {

    componentDidMount(){
        this.getIncidents();
    }
    constructor(props){
        super(props);
    }    
    state = {
        items: [
        ]
    }
    getIncidents(){
        axios.get('/incidents')
        .then(res => {
            console.log(res);
            if(res.data) {
               // alert("Registration successful!");
               this.setState(this.state.items = res.data);
            }
        }).catch(err => {
            alert("Try Again!");
        });

    }
    render(){
        const {items} = this.state;
        return(
            <div>
                <Container>
                <Breadcrumb>
                    <BreadcrumbItem className="mx-auto"><p className="text-danger">In the Event Of An Emergency Contact Local Police First</p></BreadcrumbItem>
                </Breadcrumb>
                </Container>
                <center><h1>Recent Incidents</h1></center>
                <Container width="500px">
                <ListGroup className="mx-auto">
                        {items.map(({id,title,category,description,file,date,createdAt}) => (
                            <ListGroupItem fluid >
                                <Incident id ={id} title = {title} category= {category} description={description} file={file} date={date} createdAt={createdAt} />
                            </ListGroupItem>
                        ))}
                </ListGroup>
                </Container>
            </div>
        );
    }
}
export default IncidentList;