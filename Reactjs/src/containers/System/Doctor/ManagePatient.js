import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import './ManagePatient.scss'
import DatePicker from "../../../components/Input/DatePicker";

import {getAllPatientForDoctor} from '../../../services/userService'
import moment from "moment";


class ManagePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentDate: moment(new Date()).startOf('day').valueOf(),
          dataPatient: []
        };
    }

    async componentDidMount() {
      let {user} = this.props;
      let {currentDate} = this.state;
      let formatedDate = new Date(currentDate).getTime()
      this.getDataPatient(user,formatedDate)

    }

    getDataPatient = async (user,formatedDate) => {
      let res = await getAllPatientForDoctor({
        doctorId: user.id,
        date : formatedDate
      })

      if(res && res.errCode === 0){
        this.setState({
          dataPatient: res.data
        })
      }
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }

    }

    handleOnchangeDatePicker = (date) => {
      this.setState({
        currentDate: date[0],
      }, () => {

        let {user} = this.props;
        let {currentDate} = this.state;
        let formatedDate = new Date(currentDate).getTime()
        this.getDataPatient(user,formatedDate)
      });
    };

    handleBtnConfirm = () => {

    }

    handleBtnRemedy = () => {
      
    }

    render() {
        let {dataPatient} = this.state;
        console.log(dataPatient)
        return (
            <div className = "manage-patient-container">
              <div className="m-p-title title">
                  Quản lý bệnh nhân khám bệnh
              </div>

              <div className="manage-patient-body row">
                  <div className="col-4 form-group">
                    <label>Chọn ngày khám</label>
                    <DatePicker
                      onChange={this.handleOnchangeDatePicker}
                      className="form-control"
                      value={this.state.currentDate}
                      // selected={this.state.curentDate}
                    />
                  </div>
                  <div className="col-12 table-manage-patient">
                  <table id="customers" >
                    <tbody>
                    <tr>
                      <th>STT</th>
                      <th>Thời gian</th>
                      <th>Họ và tên</th>
                      <th>Giới tính</th>
                      <th>Actions</th>
                    </tr>
                    {dataPatient && dataPatient.length > 0 ?
                      dataPatient.map((item, index) => {
                        return (
                          <tr key = {index}>
                            <td>{index + 1}</td>
                            <td>{item.timeTypeDataPatient.valueVi}</td>
                            <td>{item.patientData.firstName}</td>
                            <td>{item.patientData.genderData.valueVi}</td>
                            <td>
                              <button className="btn btn-confirm"
                                onClick={() => this.handleBtnConfirm()}
                              >Xác nhận</button>
                              <button className="btn btn-remedy"
                                onClick={() => this.handleBtnRemedy()}
                              >Gửi hóa đơn</button>
                            </td>
                          </tr>
                        )
                      })
                      :
                      <tr>
                        No data...
                      </tr>
                    }
                    
                    </tbody>
                  </table>
                  </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        user: state.user.userInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);