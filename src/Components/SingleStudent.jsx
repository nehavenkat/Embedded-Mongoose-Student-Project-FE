import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  ModalFooter,
  ModalHeader,
  Modal,
  ModalBody
} from "reactstrap";
import { withRouter } from "react-router-dom";

class SingleStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: null
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.studentSelected !== this.props.studentSelected) {
      this.setState({
        student: this.props.students.find(
          student => student.id === this.props.studentSelected
        )
      });
    }
  }

  componentDidMount = () => {
    console.log("mount", this.props);
    const studentId = this.props.match.params.studentId;
    //fetch(".../studentid")
  };
  render() {
    const studentId = this.props.match.params.studentId;

    return (
      <div>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <Modal
          isOpen={student !== undefined}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
        >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Do Something</Button>{" "}
            <Button color="secondary">Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SingleStudent);
