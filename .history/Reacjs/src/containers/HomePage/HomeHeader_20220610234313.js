import React, { Component } from "react";

import { connect } from "react-redux";
import "./HomeHeader.scss";
class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="left-content">
            <i class="fas fa-bars"></i>
            <div className="header-logo"></div>
          </div>
          <div className="center-content">
            <div className="child-content">
              <div className="child-title">Chuyên khoa</div>
              <div className="child-title-description">
                Tìm bác sĩ theo chuyên khoa
              </div>
            </div>
            <div className="child-content">
              <div className="child-title">Cơ sở y tế</div>
              <div className="child-title-description">
                Chọn bệnh viện phòng khám
              </div>
            </div>
            <div className="child-content">
              <div className="child-title">Bác sĩ</div>
              <div className="child-title-description">Chọn bác sĩ giỏi</div>
            </div>
            <div className="child-content">
              <div className="child-title">Gói khám</div>
              <div className="child-title-description">
                Khám sức khỏe tổng quát
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="support">
              <i class="far fa-question-circle"></i>Hỗ trợ
            </div>
            <div className="flaf">VN</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
