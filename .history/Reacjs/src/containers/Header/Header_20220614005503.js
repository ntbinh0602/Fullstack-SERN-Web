import React, { Component } from "react";
import { connect } from "react-redux";

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
    const { processLogout } = this.props;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>

        {/* nút logout */}
        <div className="header-tabs-function">
          <div className="languages">
            <span
              className="language-vi active"
              onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
            >
              VN
            </span>
            <span
              className="language-en"
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
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);