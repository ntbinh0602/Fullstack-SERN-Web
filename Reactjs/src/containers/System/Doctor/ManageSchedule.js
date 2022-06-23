import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageSchedule.scss";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import DatePicker from "../../../components/Input/DatePicker";

class ManageSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDoctors: [],
      selectedDoctor: {},
      curentDate: "",
      rangeTime: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctor();
    this.props.fetchAllScheduleTime();
  }

  buildDataInputSelect = (inputData) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        let labelVi = `${item.lastName} ${item.firstName}`;
        let labelEn = `${item.firstName} ${item.lastName}`;
        object.label = language === LANGUAGES.VI ? labelVi : labelEn;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }

    if (prevProps.allScheduleTime !== this.props.allScheduleTime) {
      this.setState({
        rangeTime: this.props.allScheduleTime,
      });
    }

    // if (prevProps.language !== this.props.language) {
    //   let dataSelect = this.buildDataInputSelect(this.props.allDoctors);
    //   this.setState({
    //     listDoctors: dataSelect,
    //   });
    // }
  }

  handleChangeSelect = async (selectedOption) => {
    this.setState({ selectedDoctor: selectedOption });
  };

  handleOnchaneDatePicker = (date) => {
    this.setState({
      curentDate: date,
    });
  };

  render() {
    console.log("check state:", this.state);
    let { rangeTime } = this.state;
    let { language } = this.props;
    return (
      <>
        <div className="manage-schedule-container">
          <div className="m-s-title">
            <FormattedMessage id="manage-schedule.title" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6 form-group">
                <lable>
                  <FormattedMessage id="manage-schedule.choose-doctor" />
                </lable>
                <Select
                  value={this.state.selectedDoctor}
                  onChange={this.handleChangeSelect}
                  options={this.state.listDoctors}
                />
              </div>
              <div className="col-6 form-group">
                <lable>
                  <FormattedMessage id="manage-schedule.choose-date" />
                </lable>
                <DatePicker
                  onChange={this.handleOnchaneDatePicker}
                  className="form-control"
                  value={this.state.curentDate}
                  // selected={this.state.curentDate}
                  minDate={new Date()}
                />
              </div>
              <div className="col-12 pick-hour-container">
                {rangeTime &&
                  rangeTime.length > 0 &&
                  rangeTime.map((item, index) => {
                    return (
                      <button className="btn btn-schedule" key={index}>
                        {language === LANGUAGES.VI
                          ? item.valueVi
                          : item.valueEn}
                      </button>
                    );
                  })}
              </div>
              <div className="col-12">
                <button className="btn btn-primary">
                  <FormattedMessage id="manage-schedule.save-inf" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    allDoctors: state.admin.allDoctors,
    language: state.app.language,
    allScheduleTime: state.admin.allScheduleTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
