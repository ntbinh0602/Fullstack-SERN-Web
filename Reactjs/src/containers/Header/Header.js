import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { LANGUAGES } from "../../utils";

class Header extends Component {
  handleChangeLanguage = (language) => {
    this.props.changLanguageAppRedux(language);
  };
  render() {
    const { processLogout, userInfo } = this.props;
    let language = this.props.lang;
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>

        {/* nút logout */}
        <div className="header-tabs-function">
          <span className="welcome">
            <FormattedMessage id="home-header.welcome" />, &nbsp;
            {userInfo && userInfo.firstName && userInfo.lastName
              ? userInfo.firstName + " " + userInfo.lastName
              : ""}
            !
          </span>
          <div className="languages">
            <span
              className={
                language === LANGUAGES.VI ? "language-vi active" : "language-vi"
              }
              onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
            >
              VN
            </span>
            <span
              className={
                language === LANGUAGES.EN ? "language-en active" : "language-en"
              }
              onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
            >
              EN
            </span>
          </div>
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="logout"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changLanguageAppRedux: (language) =>
      dispatch(actions.changLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
