import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import { connect } from "react-redux";
import Specialty from "./Section/Specialty";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);