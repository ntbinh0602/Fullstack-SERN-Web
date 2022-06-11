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

  handleOnchangeInput = (event) => {
    this.setState({});
  };

  render() {
    console.log("check child props", this.props);
    console.log("check child open modal", this.props.isOpen);
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
                  this.handleOnchangeInput(event);
                }}
                name="email"
              />
            </div>
            <div className="input-container">
              <lable>Mật khẩu</lable>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnchangeInput(event);
                }}
                name="email"
              />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container">
              <lable>Tên</lable>
              <input type="text" />
            </div>
            <div className="input-container">
              <lable>Họ</lable>
              <input type="text" />
            </div>
          </div>
          <div className="modal-user-body">
            <div className="input-container max-width-input">
              <lable>Địa chỉ</lable>
              <input type="text" />
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
