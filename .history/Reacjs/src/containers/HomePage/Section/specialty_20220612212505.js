import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Specialty.scss";

import h1 from "../../../assets/images/khoa-co-xuong-khop.jpg";

class Specialty extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
    return (
      <div className="section-specialty">
        <div className="specialty-content">
          <div className="specialty-title">
            <h4>Chuyên khoa phổ biến</h4>
            <button>Xem thêm</button>
          </div>
          <Slider {...settings}>
            <div className="specialty-box-item">
              <img src={h1} height="180px" />
              <span>Cơ xương khớp</span>
            </div>
            <div className="specialty-box-item">
              <img src={h1} height="180px" />
              <span>Cơ xương khớp</span>
            </div>
            <div className="specialty-box-item">
              <img src={h1} height="180px" />
              <span>Cơ xương khớp</span>
            </div>
            <div className="specialty-box-item">
              <img src={h1} height="180px" />
              <span>Cơ xương khớp</span>
            </div>
            <div className="specialty-box-item">
              <img src={h1} height="180px" />
              <span>Cơ xương khớp</span>
            </div>
            <div className="specialty-box-item">
              <img src={h1} height="180px" />
              <span>Cơ xương khớp</span>
            </div>
            <div className="specialty-box-item">
              <img src={h1} height="180px" />
              <span>Cơ xương khớp</span>
            </div>
            <div className="specialty-box-item">
              <img src={h1} height="180px" />
              <span>Cơ xương khớp</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
