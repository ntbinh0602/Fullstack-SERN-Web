import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="user-redux-container">
        <div className="title">Quản lý người dùng (sử dụng Redux)</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <lable>Email</lable>
                <input className="form-control" type="email" />
              </div>
              <div className="col-3">
                <lable>Password</lable>
                <input className="form-control" type="password" />
              </div>
              <div className="col-3">
                <lable>First name</lable>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
                <lable>Last name</lable>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
                <lable>Phone number</lable>
                <input className="form-control" type="text" />
              </div>
              <div className="col-9">
                <lable>Address</lable>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3">
                <label>Gender</label>
                <select className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-3">
                <label>RoleId</label>
                <select className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-3">
                <label>Position</label>
                <select className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
