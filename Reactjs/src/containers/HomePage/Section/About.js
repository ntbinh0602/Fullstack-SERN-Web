import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import "../HomePage.scss";

class About extends Component {
  render() {
    return (
      <div className="section-share section-light section-large-size">
        <div className="section-content">
          <div className="section-title">
            <h4>Truyền thông nói gì về BookingCare Clone</h4>
          </div>
          <div className="section-about-content">
            <div className="section-about-content-left">
              <iframe
                width="90%"
                height="400px"
                src="https://www.youtube.com/embed/q6fGZGpzeaY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="section-about-content-right">
              <p>
                "Nếu bạn từng hoặc đang trải qua giai đoạn có rất nhiều nhiệt
                huyết khi bắt đầu một hoạt động nào đó, nhưng thường không thể
                tìm được động lực để duy trì mà lại không rõ nguyên nhân, thì có
                thể bạn đang NỖ LỰC ẢO đó."
              </p>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
