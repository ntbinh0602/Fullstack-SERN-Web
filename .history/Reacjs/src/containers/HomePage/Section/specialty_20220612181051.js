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
      slidesToScroll: 4,
    };
    return (
      <div className="section-specialty">
        <div className="specialty-content">
          <Slider {...settings}>
            <div className="border-test">
              <img href={h1} height="500px" />
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
