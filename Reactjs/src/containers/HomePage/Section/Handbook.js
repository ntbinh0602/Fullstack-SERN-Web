import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import "../HomePage.scss";

import h1 from "../../../assets/handbook/handbook.jpg";
import h2 from "../../../assets/handbook/kham-benh-tu-xa.jpg";

class Handbook extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div className="section-share section-dark">
        <div className="section-content">
          <div className="section-title">
            <h4><FormattedMessage id="homepage.handbook"/></h4>
            <button><FormattedMessage id="homepage.all-posts"/></button>
          </div>
          <Slider {...settings}>
            <div className="section-box-item">
              <div className="handbook-box">
                <img src={h1} />
                <span>
                  Phòng khám Tai mũi họng Hải Hà: Có tốt không? Bác sĩ nào giỏi?
                </span>
              </div>
            </div>
            <div className="section-box-item">
              <div className="handbook-box">
                <img src={h2} />
                <span>
                  Khám bệnh trực tuyến (khám online) là gì? Đăng kí khám như thế
                  nào?
                </span>
              </div>
            </div>
            <div className="section-box-item">
              <div className="handbook-box">
                <img src={h1} />
                <span>
                  Phòng khám Tai mũi họng Hải Hà: Có tốt không? Bác sĩ nào giỏi?
                </span>
              </div>
            </div>
            <div className="section-box-item">
              <div className="handbook-box">
                <img src={h2} />
                <span>
                  Khám bệnh trực tuyến (khám online) là gì? Đăng kí khám như thế
                  nào?
                </span>
              </div>
            </div>
          </Slider>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
