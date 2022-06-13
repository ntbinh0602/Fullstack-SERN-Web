import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Specialty.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <h3>Chuyên khoa phổ biến</h3>
          </div>
          <Slider {...settings}>
            <div className="border-test">
              <img src={h1} height="200px" />
            </div>
            <div className="border-test">
              <h3>2</h3>
            </div>
            <div className="border-test">
              <h3>3</h3>
            </div>
            <div className="border-test">
              <h3>4</h3>
            </div>
            <div className="border-test">
              <h3>5</h3>
            </div>
            <div className="border-test">
              <h3>6</h3>
            </div>
            <div className="border-test">
              <h3>7</h3>
            </div>
            <div className="border-test">
              <h3>8</h3>
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
