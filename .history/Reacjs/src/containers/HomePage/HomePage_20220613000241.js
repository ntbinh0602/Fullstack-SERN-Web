import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Specialty from "./Section/Specialty";
import MedicalFacility from "./Section/MedicalFacility";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Specialty />
        <MedicalFacility />
        <div style={{ height: "300px" }}></div>
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
