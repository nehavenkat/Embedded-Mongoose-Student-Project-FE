import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import SingleStudent from "./SingleStudent";
import { Link } from "react-router-dom";

class StudentComponent extends React.Component {
  state = {
    modalOpen: false
  };

  setCard = event => {
    event.preventDefault();

    if (this.state.modalOpen === true) {
      this.setState({
        modalOpen: false
      });
    } else if (this.state.modalOpen === false) {
      this.setState({
        modalOpen: true
      });
    }
  };

  render() {
    const student = this.props.student;
    return (
      <Card>
        <CardBody>
          <CardTitle>Name:{student.name}</CardTitle>
          <CardSubtitle>surname:{student.surname}</CardSubtitle>
          <CardText>EmailID:{student.email}</CardText>
          <ul>
            {/*  */}
            {student.projects.map((project, j) => (
              <li key={j}>ProjectsName:{project.name}</li>
            ))}
          </ul>
          <Link className="btn btn-primarty" to={"/student/" + student._id}>
            More Info
          </Link>
          {/* <Button onClick={() => {
                    console.log(student, this.props)
                    this.props.onSelectStudent(student)}} color="primary">More Info</Button>{' '} */}
        </CardBody>
      </Card>
    );
  }
}

export default StudentComponent;
