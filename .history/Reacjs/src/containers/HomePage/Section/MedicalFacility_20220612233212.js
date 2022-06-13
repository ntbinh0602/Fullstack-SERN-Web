import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import "../HomePage.scss";

class MedicalFacility extends Component {
  render() {
    return <div>haha</div>;
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
