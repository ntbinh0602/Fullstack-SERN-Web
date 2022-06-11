import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emitter";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
    };
  }

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("All");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  handleAddNewUser = (event) => {
    this.setState({
      isOpenModalUser: true,
    });
  };

  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false,
        });
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleDeleteUser = async (user) => {
    try {
      let response = await deleteUserService(user.id);
      if (response && response.errCode === 0) {
        await this.getAllUsersFromReact();
      } else {
        alert(response.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleEditUser = async (user) => {
    console.log("check edit user", user);
    this.setState({
      isOpenModalUser: true,
    });
  };

  /**
   * Life cycle
   * 1. Run construct -> init state
   * 2. Did mount (set state)
   * + goi API
   * + set state
   * 3. Render
   *
   */

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container mx-1">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        <ModalEditUser
          isOpen={this.state.isOpenModalEditUser}
          // toggleFromParent={this.toggleUserModal}
          // createNewUser={this.createNewUser}
        />
        <div className="title text-center">Quản lý người dùng</div>
        <button
          className="btn btn-primary px-3"
          onClick={(event) => {
            this.handleAddNewUser(event);
          }}
        >
          <i className="fas fa-plus"></i>Thêm người dùng mới
        </button>
        <div className="users-table mt-4">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>Tên</th>
                <th>Họ</th>
                <th>Địa chỉ</th>
                <th>Actions</th>
              </tr>

              {arrUsers &&
                arrUsers.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          onClick={() => this.handleEditUser(item)}
                          className="btn-edit"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          onClick={() => this.handleDeleteUser(item)}
                          className="btn-delete"
                        >
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
