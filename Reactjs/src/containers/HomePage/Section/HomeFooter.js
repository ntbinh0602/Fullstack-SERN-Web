import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import "../HomePage.scss";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        &copy; 2022 TrongBinh.
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100008734447899"
        >
          More Infomation
        </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
