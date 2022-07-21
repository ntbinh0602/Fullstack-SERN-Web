import React, { Component } from "react";
import { connect } from "react-redux";
import "../HomePage.scss";
import Slider from "react-slick";
import {getAllClinic} from "../../../services/userService"
import {withRouter} from 'react-router'

class MedicalFacility extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataClinics: []
    }
  }

  async componentDidMount() {
    let res = await getAllClinic();
    if(res && res.errCode === 0) {
      this.setState({
        dataClinics: res.data ? res.data: []
      })
    }
  }

  handleViewDetailClinic = (clinic) => {
    if(this.props.history) {
      this.props.history.push(`/detail-clinic/${clinic.id}`)
    }
  }

  render() {
    let {dataClinics} = this.state
    return (
      <div className="section-share section-dark">
        <div className="section-content">
          <div className="section-title">
            <h4>Cơ sở y tế nổi bật</h4>
            <button>Xem thêm</button>
          </div>
          <Slider {...this.props.settings}>
            {dataClinics && dataClinics.length > 0 && 
              dataClinics.map((item,index) => {
                return (
                  <div className="section-box-item" key={index}
                    onClick = {() => this.handleViewDetailClinic(item)}
                  >
                    <img src={item.image} />
                    <span>{item.name}</span>
                  </div>
                )
              })
            }
          </Slider>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));
