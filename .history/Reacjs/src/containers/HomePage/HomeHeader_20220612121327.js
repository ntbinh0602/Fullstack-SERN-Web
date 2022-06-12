import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { LANGUAGES } from "../../utils";
import { changeLaguageApp } from "../../store/actions";
class HomeHeader extends Component {
  changeLaguage = (language) => {
    //fire redux event: actions
    alert(language);
  };

  render() {
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div className="child-title">
                  <FormattedMessage id="home-header.speciality" />
                </div>
                <div className="child-title-description">
                  <FormattedMessage id="home-header.search-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div className="child-title">
                  <FormattedMessage id="home-header.health-facility" />
                </div>
                <div className="child-title-description">
                  <FormattedMessage id="home-header.select-room" />
                </div>
              </div>
              <div className="child-content">
                <div className="child-title">
                  <FormattedMessage id="home-header.doctor" />
                </div>
                <div className="child-title-description">
                  <FormattedMessage id="home-header.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div className="child-title">
                  <FormattedMessage id="home-header.fee" />
                </div>
                <div className="child-title-description">
                  <FormattedMessage id="home-header.check-health" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question"></i>
                <div>
                  <FormattedMessage id="home-header.support" />
                </div>
              </div>
              <div className="flag">
                <div className="flag-vi active">
                  <span onClick={() => this.changeLaguage(LANGUAGES.VI)}>
                    VN
                  </span>
                </div>
                <div className="flag-en">
                  <span onClick={() => this.changeLaguage(LANGUAGES.EN)}>
                    EN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-top">
            <div className="title1">
              <FormattedMessage id="banner.title1" />
            </div>
            <div className="title2">
              <FormattedMessage id="banner.title2" />
            </div>
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
            </div>
          </div>
          <div className="content-bottom">
            <div className="options">
              <ul className="option-child">
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-hospital"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="banner.specialist-examination" />
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="banner.remote-examination" />
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-stethoscope"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="banner.general-examination" />
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-flask"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="banner.medical-test" />
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-procedures"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="banner.mental-health" />
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-heartbeat"></i>
                    </div>
                    <div className="text-child">
                      <FormattedMessage id="banner.dental-examination" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span className="layer-dark"></span>
        </div>
      </>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
