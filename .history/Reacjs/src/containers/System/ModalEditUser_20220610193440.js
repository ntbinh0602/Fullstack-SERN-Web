import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import _ from "lodash";

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    // let {currentUser} = this.props;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "hashcode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
    console.log("mouting modal", this.props.currentUser);
  }

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      //call api create modal
      this.props.createNewUser(this.state);
    }
  };

  handleSaveUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.editUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.toggle}
        className={"modal-user-container"}
        size="lg"
        centered
      >
        <ModalHeader toggle={this.toggle}>Chỉnh sửa người dùng</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <lable>Email</lable>
              <input
                type="email"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "email");
                }}
                value={this.state.email}
                disabled
              />
            </div>
            <div className="input-container">
              <lable>Mật khẩu</lable>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "password");
                }}
                value={this.state.password}
                disabled
              />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container">
              <lable>Tên</lable>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "firstName");
                }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <lable>Họ</lable>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "lastName");
                }}
                value={this.state.lastName}
              />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container max-width-input">
              <lable>Địa chỉ</lable>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="px-3"
            color="primary"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Lưu thay đổi
          </Button>{" "}
          <Button className="px-3" color="secondary" onClick={this.toggle}>
            Đóng
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
