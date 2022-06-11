import React, { Component } from "react";

import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <div>hello home page</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
