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
              <div className="col-6">
                <lable>Email</lable>
                <input className="form-control" type="email" />
              </div>
              <div className="col-6">
                <lable>Email</lable>
                <input className="form-control" type="email" />
              </div>
              <div className="col-6">
                <lable>Email</lable>
                <input className="form-control" type="email" />
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
