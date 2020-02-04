import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import HomeComponent from './HomeComponent';
import SingleStudent from "./SingleStudent";
import {BrowserRouter as Router, Route} from "react-router-dom"



export default class MainComponent extends Component {
    render() {
        return (
            <Router>
            <Container>
                <Row>
                <Col md="8">
                <h1>Students Protfolio</h1>
                  {/* <HomeComponent /> */}
                </Col>
                <Col>
                <SingleStudent />
                </Col>
                <Route path='/' exact component={HomeComponent}/>
                <Route path='/student/:studentId' component={SingleStudent}/>
                </Row>
            </Container>

            </Router>


        )
    }
}
