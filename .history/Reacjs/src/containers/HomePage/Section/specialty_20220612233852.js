import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Specialty.scss";
import "../HomePage.scss";

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
        <div className="section-content">
          <div className="section-title">
            <h4>Chuyên khoa phổ biến</h4>
            <button>Xem thêm</button>
          </div>
          <Slider {...settings}>
            <div className="section-box-item">
              <img src={h1} />
              <span>Cơ xương khớp 1</span>
            </div>
            <div className="section-box-item">
              <img src={h1} />
              <span>Cơ xương khớp 2</span>
            </div>
            <div className="section-box-item">
              <img src={h1} />
              <span>Cơ xương khớp 3</span>
            </div>
            <div className="section-box-item">
              <img src={h1} />
              <span>Cơ xương khớp 4</span>
            </div>
            <div className="section-box-item">
              <img src={h1} />
              <span>Cơ xương khớp 5</span>
            </div>
            <div className="section-box-item">
              <img src={h1} />
              <span>Cơ xương khớp 6</span>
            </div>
            <div className="section-box-item">
              <img src={h1} />
              <span>Cơ xương khớp 7</span>
            </div>
            <div className="section-box-item">
              <img src={h1} />
              <span>Cơ xương khớp 8</span>
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
