import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import "../HomePage.scss";

class About extends Component {
  render() {
    return (
      <div className="section-share section-dark">
        <div className="section-content">
          <div className="section-title">
            <h4>Cẩm nang</h4>
            <button>Tất cả bài viết</button>
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
