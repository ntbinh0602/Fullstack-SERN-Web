import React, { Component } from "react";

import { connect } from "react-redux";

class Header extends Component {
  render() {
    return <div>hello header page</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
