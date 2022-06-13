import React, { Component } from "react";
import { connect } from "react-redux";
import "../HomePage.scss";
import "./MedicalFacility.scss";
import Slider from "react-slick";
import h1 from "../../../assets/images/benh-vien-cho-ray.jpg";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-content">
          <div className="section-title">
            <h4>Cơ sở y tế nổi bật</h4>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);