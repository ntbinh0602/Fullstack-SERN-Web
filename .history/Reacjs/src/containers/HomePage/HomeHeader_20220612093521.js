import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./HomeHeader.scss";
class HomeHeader extends Component {
  render() {
    console.log("check props:", this.props);
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
                  Khám sức khỏe tổng quát
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question"></i>
                <div>Hỗ trợ</div>
              </div>
              <div className="flag">
                <div className="flag-vi active">VN</div>
                <div className="flag-en">EN</div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-top">
            <div className="title1">NỀN TẢNG Y TẾ</div>
            <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
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
                      Khám <br /> chuyên khoa
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="text-child">
                      Khám <br /> từ xa
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-stethoscope"></i>
                    </div>
                    <div className="text-child">
                      Khám <br /> tổng quát
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-flask"></i>
                    </div>
                    <div className="text-child">
                      Xét nghiệm
                      <br /> y học
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-procedures"></i>
                    </div>
                    <div className="text-child">
                      Sức khỏe
                      <br /> tinh thần
                    </div>
                  </a>
                </li>
                <li className="option-child-item">
                  <a href="#">
                    <div className="icon-child">
                      <i className="fas fa-heartbeat"></i>
                    </div>
                    <div className="text-child">
                      Khám
                      <br /> nha khoa
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