import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DetailDoctor.scss";
import { LANGUAGES } from "../../../utils";
import { getDetailInforDoctor } from "../../../services/userService";
import DoctorExtraInfor from "./DoctorExtraInfor";
import DoctorSchedule from "./DoctorSchedule";
import Comment from "../SocialPlugin/Comment";
import LikeAndShare from "../SocialPlugin/LikeAndShare";

class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: {},
      currentDoctorId: -1,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      this.setState({
        currentDoctorId: id,
      });
      let res = await getDetailInforDoctor(id);
      if (res && res.errCode === 0) {
        this.setState({
          detailDoctor: res.data,
        });
      }
    }
  }

  render() {
    let { language } = this.props;
    let { detailDoctor } = this.state;
    let nameVi = "",
      nameEn = "";
    if (detailDoctor && detailDoctor.positionData) {
      nameVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
      nameEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
    }

    let currentURL =
      +process.env.REACT_APP_IS_LOCALHOST === 1
        ? "https://www.bilibili.tv/vi/play/1050808?bstar_from=bstar-web.anime-tab.for-you.all"
        : window.location.href;

    return (
      <>
        <HomeHeader isShowBanner={false} />
        <div className="doctor-detail-container">
          <div className="intro-doctor">
            <div className="intro-doctor-box">
              <div className="content-left">
                <img
                  className="img-doctor"
                  src={
                    detailDoctor && detailDoctor.image ? detailDoctor.image : ""
                  }
                ></img>
              </div>
              <div className="content-right">
                <div className="up">
                  {language === LANGUAGES.VI ? nameVi : nameEn}
                </div>
                <div className="down">
                  {detailDoctor &&
                    detailDoctor.Markdown &&
                    detailDoctor.Markdown.description && (
                      <span>{detailDoctor.Markdown.description}</span>
                    )}
                </div>
                <div className="plugin_facebook">
                  <LikeAndShare dataHref={currentURL} />
                </div>
              </div>
            </div>
          </div>
          <div className="schedule-doctor">
            <div className="schedule-doctor-box">
              <div className="content-left">
                <DoctorSchedule
                  doctorIdFromParent={this.state.currentDoctorId}
                />
              </div>
              <div className="content-right">
                <DoctorExtraInfor
                  doctorIdFromParent={this.state.currentDoctorId}
                />
              </div>
            </div>
          </div>
          <div className="detail-infor-doctor">
            <div className="detail-infor-doctor-box">
              {detailDoctor &&
                detailDoctor.Markdown &&
                detailDoctor.Markdown.contentHTML && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detailDoctor.Markdown.contentHTML,
                    }}
                  ></div>
                )}
            </div>
          </div>
          <div className="comment-doctor">
            <Comment dataHref={currentURL} width={"100%"} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
