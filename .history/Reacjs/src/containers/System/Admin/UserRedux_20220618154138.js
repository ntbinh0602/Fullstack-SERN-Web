import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
      previewImageUrl: "",
      isOpen: false,

      // save state variable user
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();

    // this.props.dispatch(actions.fetchGenderStart());
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
    if (prevProps.positionRedux !== this.props.positionRedux) {
      this.setState({
        positionArr: this.props.positionRedux,
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      this.setState({
        roleArr: this.props.roleRedux,
      });
    }
  }

  handleOnchangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        previewImageUrl: objectUrl,
      });
    }
  };

  openPrevewImage = () => {
    if (!this.state.previewImageUrl) return;
    this.setState({
      isOpen: true,
    });
  };

  handleAddUser = () => {};

  onChangeInput = () => {
    // email: "",
    // password: "",
    // firstName: "",
    // lastName: "",
    // phoneNumber: "",
    // address: "",
    // gender: "",
    // position: "",
    // role: "",
    // avatar: "",
  };

  render() {
    let genders = this.state.genderArr;
    let positions = this.state.positionArr;
    let roles = this.state.roleArr;
    let language = this.props.language;
    let isGetGender = this.props.isLoadingGender;

    let {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      gender,
      position,
      role,
      avatar,
    } = this.state;

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
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    this.onChangeInput(event, "email");
                  }}
                />
              </div>
              <div className="col-3 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.password" />
                </lable>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    this.onChangeInput(event, "password");
                  }}
                />
              </div>
              <div className="col-3 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.first-name" />
                </lable>
                <input
                  className="form-control"
                  type="text"
                  value={firstName}
                  onChange={(event) => {
                    this.onChangeInput(event, "firsName");
                  }}
                />
              </div>
              <div className="col-3 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.last-name" />
                </lable>
                <input
                  className="form-control"
                  type="text"
                  value={lastName}
                  onChange={(event) => {
                    this.onChangeInput(event, "lastName");
                  }}
                />
              </div>
              <div className="col-3 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.phone-number" />
                </lable>
                <input
                  className="form-control"
                  type="text"
                  value={phoneNumber}
                  onChange={(event) => {
                    this.onChangeInput(event, "phoneNumber");
                  }}
                />
              </div>
              <div className="col-9 mt-3">
                <lable>
                  <FormattedMessage id="manage-user.address" />
                </lable>
                <input
                  className="form-control"
                  type="text"
                  value={address}
                  onChange={(event) => {
                    this.onChangeInput(event, "address");
                  }}
                />
              </div>
              <div className="col-3 mt-3">
                <label>
                  <FormattedMessage id="manage-user.gender" />
                </label>
                <select
                  className="form-control"
                  onChange={(event) => {
                    this.onChangeInput(event, "email");
                  }}
                >
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
                  <FormattedMessage id="manage-user.role" />
                </label>
                <select className="form-control">
                  {roles &&
                    roles.length > 0 &&
                    roles.map((item, index) => {
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
                <lable className="">
                  <FormattedMessage id="manage-user.image" />
                </lable>
                <div className="preview-img-container">
                  <input
                    id="previewImg"
                    type="file"
                    hidden
                    onChange={(event) => this.handleOnchangeImage(event)}
                  />
                  <label className="label-upload" htmlFor="previewImg">
                    <FormattedMessage id="manage-user.upload-image" />
                    <i className="fas fa-upload mx-2"></i>
                  </label>
                  {!this.state.previewImageUrl ? (
                    <div className="no-image">
                      <FormattedMessage id="manage-user.no-image" />
                    </div>
                  ) : (
                    <div
                      className="preview-image"
                      style={{
                        backgroundImage: `url(${this.state.previewImageUrl})`,
                      }}
                      onClick={() => this.openPrevewImage()}
                    ></div>
                  )}
                </div>
              </div>
              <div className="col-12 my-2">
                <button
                  onClick={() => this.handleAddUser()}
                  className="btn btn-primary right-content"
                >
                  <FormattedMessage id="manage-user.save" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImageUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    positionRedux: state.admin.positions,
    roleRedux: state.admin.roles,
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
