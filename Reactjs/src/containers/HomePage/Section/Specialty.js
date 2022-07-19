import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import "../HomePage.scss";
import { getAllSpecialty } from "../../../services/userService";
import {withRouter} from 'react-router'

class Specialty extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSpecialty: []
    }
  }

  async componentDidMount() {
    let res = await getAllSpecialty();
    console.log('bb check res:', res)
    if (res && res.errCode === 0) {
      this.setState({
        dataSpecialty: res.data ? res.data : []
      })
    }
  }

  handleViewDetailSpecialty = (specialty) => {
    this.props.history.push(`/detail-specialty/${specialty.id}`);
  };

  render() {
    let { dataSpecialty } = this.state
    return (
      <div className="section-share section-light">
        <div className="section-content">
          <div className="section-title">
            <h4><FormattedMessage id="homepage.specialty-popular" /></h4>
            <button><FormattedMessage id="homepage.see-more" /></button>
          </div>
          <Slider {...this.props.settings}>
            {dataSpecialty && dataSpecialty.length > 0 &&
              dataSpecialty.map((item, index) => {
                return (
                  <div 
                  className="section-box-item" 
                  key={index}
                  onClick={() => {
                    this.handleViewDetailSpecialty(item);
                  }}
                  >
                    <img src={item.image} />
                    <span>{item.name}</span>
                  </div>
                )
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
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
