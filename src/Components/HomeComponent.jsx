import React, { Component } from 'react';
import { Row, Col , Container} from 'reactstrap';
import StudentComponent from './Student';
import SingleStudent from './SingleStudent';
//import {Student} from 'Student';

export default class HomeComponent extends Component {
    state ={
        studentList: [],
        // selectedStudent: null
    };
    render() {
        return (
            <Container>
                <Row>
                <Col sm="6">  
                {this.state.studentList.map((student, i) => 
                 <StudentComponent 
                        student={student}
                        // onSelectStudent={(student)=> {
                        //     // this.setState({selectedStudent: student})
                        //     this.props.history.push("/students/" + student.id)
                        // } }
                        key={i}></StudentComponent>
                )}
               
                </Col>
                </Row>
                <SingleStudent student={this.state.selectedStudent} ></SingleStudent>
            </Container>
        )
    }
    componentDidMount = async() =>{
   
        const result = await fetch("http://localhost:3001/students")
        const students = await result.json();
        console.log(students)
        this.setState({ studentList: students})// declaring the state

    }

}

