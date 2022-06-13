import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import "../HomePage.scss";

import h1 from "../../../assets/outstanding-doctor/bs-vi.jpg";

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
              <div className="outstanding-box">
                <img src={h1} className="out-standing-doctor-img" />
                <span>Bác sĩ, thạc sĩ Trần Thí Vi</span>
                <span>Da liễu 1</span>
              </div>
            </div>
            <div className="section-box-item">
              <div>
                <img src={h1} className="out-standing-doctor-img" />
                <span>Bác sĩ, thạc sĩ Trần Thí Vi</span>
                <span>Da liễu 2</span>
              </div>
            </div>
            <div className="section-box-item">
              <div>
                <img src={h1} className="out-standing-doctor-img" />
                <span>Bác sĩ, thạc sĩ Trần Thí Vi</span>
                <span>Da liễu 3</span>
              </div>
            </div>
            <div className="section-box-item">
              <div>
                <img src={h1} className="out-standing-doctor-img" />
                <span>Bác sĩ, thạc sĩ Trần Thí Vi</span>
                <span>Da liễu 4</span>
              </div>
            </div>
            <div className="section-box-item">
              <div>
                <img src={h1} className="out-standing-doctor-img" />
                <span>Bác sĩ, thạc sĩ Trần Thí Vi</span>
                <span>Da liễu 5</span>
              </div>
            </div>
            <div className="section-box-item">
              <div>
                <img src={h1} className="out-standing-doctor-img" />
                <span>Bác sĩ, thạc sĩ Trần Thí Vi</span>
                <span>Da liễu 6</span>
              </div>
            </div>
            <div className="section-box-item">
              <div>
                <img src={h1} className="out-standing-doctor-img" />
                <span>Bác sĩ, thạc sĩ Trần Thí Vi</span>
                <span>Da liễu 7</span>
              </div>
            </div>
            <div className="section-box-item">
              <div>
                <img src={h1} className="out-standing-doctor-img" />
                <span>Bác sĩ, thạc sĩ Trần Thí Vi</span>
                <span>Da liễu 8</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);