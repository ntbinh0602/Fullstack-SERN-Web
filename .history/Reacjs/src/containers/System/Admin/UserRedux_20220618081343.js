import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }

  async componentDidMount() {
    // this.props.getGenderStart();
    this.props.dispatch(actions.fetchGenderStart());
    // try {
    //   let res = await getAllCodeService("gender");
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //     });
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //render => didupdate
    // hiện tại(this) và quá khứ(prev)
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
  }

  render() {
    let genders = this.state.genderArr;
    let positions = this.state.positionArr;
    let roles = this.state.roleArr;

    let language = this.props.language;
    let isGetGender = this.props.isLoadingGender;
    console.log("check props from redux:", this.props.genderRedux);
    return (
      <div className="user-redux-container">
        <div className="title">
          <FormattedMessage id="manage-user.user-manage" />
        </div>
        <div>{isGetGender === true ? "Loading gender" : ""}</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-3">
                <FormattedMessage id="manage-user.add" />
              </div>
              <div className="col-3 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.email" />
                </lable>
                <input className="form-control" type="email" />
              </div>
              <div className="col-3 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.password" />
                </lable>
                <input className="form-control" type="password" />
              </div>
              <div className="col-3 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.first-name" />
                </lable>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.last-name" />
                </lable>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.phone-number" />
                </lable>
                <input className="form-control" type="text" />
              </div>
              <div className="col-9 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.address" />
                </lable>
                <input className="form-control" type="text" />
              </div>
              <div className="col-3 mt-3">
                <label>
                  <FormattedMessage id="manage-user.gender" />
                </label>
                <select className="form-control">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-3 mt-3">
                <label>
                  <FormattedMessage id="manage-user.position" />
                </label>
                <select className="form-control">
                  {positions &&
                    positions.length > 0 &&
                    positions.map((item, index) => {
                      <option>...</option>;
                    })}
                </select>
              </div>
              <div className="col-3 mt-3">
                <label>
                  <FormattedMessage id="manage-user.role" />
                </label>
                <select className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-3 mt-3">
                <lable className="">
                  <FormattedMessage id="manage-user.image" />
                </lable>
                <input className="form-control mt-2" type="text" />
              </div>
              <div className="col-12 my-5">
                <button className="btn btn-primary">
                  <FormattedMessage id="manage-user.save" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // processLogout: () => dispatch(actions.processLogout()),
    // changLanguageAppRedux: (language) =>
    //   dispatch(actions.changLanguageApp(language)),
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
