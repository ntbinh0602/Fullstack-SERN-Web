import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  toggle = () => {
    this.props.toggleFromParent();
  };
  render() {
    console.log("check child props", this.props);
    console.log("check child open modal", this.props.isOpen);
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.toggle}
        className={"abcclassname"}
        size="lg"
        centered
      >
        <ModalHeader toggle={this.toggle}>Tạo người dùng mới</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-6 form-group">
                <lable>Email</lable>
                <input type="text" />
              </div>
              <div className="col-6 form-group">
                <lable>Password</lable>
                <input type="text" />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="px-3" color="primary" onClick={this.toggle}>
            Tạo mới
          </Button>{" "}
          <Button className="px-3" color="secondary" onClick={this.toggle}>
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);