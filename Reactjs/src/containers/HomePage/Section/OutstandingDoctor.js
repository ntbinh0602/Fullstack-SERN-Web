import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import "../HomePage.scss";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import { withRouter } from "react-router";

class OutstandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    };
  }
  // check các sự thay đổi và gán giá trị lại cho biến
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        arrDoctors: this.props.topDoctorsRedux,
      });
    }
  }

  componentDidMount() {
    this.props.loadTopDoctors();
  }

  handleViewDetailDoctor = (doctor) => {
    this.props.history.push(`/detail-doctor/${doctor.id}`);
  };

  render() {
    let { language } = this.props;
    let arrDoctors = this.state.arrDoctors;
    return (
      <div className="section-share section-light">
        <div className="section-content">
          <div className="section-title">
            <h4>
              <FormattedMessage id="homepage.outstanding-doctor" />
            </h4>
            <button>
              <FormattedMessage id="homepage.see-more" />
            </button>
          </div>
          <Slider {...this.props.settings}>
            {arrDoctors &&
              arrDoctors.length > 0 &&
              arrDoctors.map((item, index) => {
                let imageBase64 = "";
                if (item.image) {
                  imageBase64 = new Buffer(item.image, "base64").toString(
                    "binary"
                  );
                }
                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;

                return (
                  <div
                    className="section-box-item"
                    key={index}
                    onClick={() => {
                      this.handleViewDetailDoctor(item);
                    }}
                  >
                    <div className="outstanding-box">
                      <img
                        src={imageBase64}
                        className="out-standing-doctor-img"
                      />
                      <span>{language === LANGUAGES.VI ? nameVi : nameEn}</span>
                      <span>Khoa thần kinh</span>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    topDoctorsRedux: state.admin.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor)
);
