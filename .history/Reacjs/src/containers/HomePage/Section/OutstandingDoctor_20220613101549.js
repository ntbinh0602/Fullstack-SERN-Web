import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import "../HomePage.scss";

import h1 from "../../../assets/specialty/khoa-co-xuong-khop.jpg";

class OutstandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-light">
        <div className="section-content">
          <div className="section-title">
            <h4>Bác sĩ nổi bật tuần qua</h4>
            <button>Xem thêm</button>
          </div>
          <Slider {...this.props.settings}>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);