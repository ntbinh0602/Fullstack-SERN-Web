import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {}
  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnchangeInput = (event, id) => {
    //BAD CODE : modify state

    /**
     * this.state = {
     * email: '',
     * password: '',
     * firstName: "",
     * lastName: ""
     * address: "",
     * }
     * this.state.email === this.state['email]
     */
    // this.state[id] = event.target.value; // modify state

    // this.setState(
    //   {
    //     ...this.state,
    //   },
    //   () => {
    //     console.log("check bad code:", this.state);
    //   }
    // );

    //GOOD CODE
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
    console.log("copy state", copyState);
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
        <ModalHeader toggle={this.toggle}>Tạo người dùng mới</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <lable>Email</lable>
              <input
                type="email"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "email");
                }}
                name="email"
              />
            </div>
            <div className="input-container">
              <lable>Mật khẩu</lable>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "password");
                }}
                name="password"
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
                name="firstName"
              />
            </div>
            <div className="input-container">
              <lable>Họ</lable>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "lastName");
                }}
                name="lastName"
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
                name="address"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="px-3" color="primary" onClick={this.toggle}>
            Thêm mới
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
