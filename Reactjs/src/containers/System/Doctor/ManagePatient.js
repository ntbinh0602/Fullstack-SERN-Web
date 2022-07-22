import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import './ManagePatient.scss'
import DatePicker from "../../../components/Input/DatePicker";

import {getAllPatientForDoctor,postSendRemedy} from '../../../services/userService'
import moment from "moment";
import { LANGUAGES } from "../../../utils";
import RemedyModal from "./RemedyModal"
import { toast } from "react-toastify";
import LoadingOverlay from 'react-loading-overlay';


class ManagePatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentDate: moment(new Date()).startOf('day').valueOf(),
          dataPatient: [],
          isOpenRemedyModal: false,
          dataModal: {},
          isShowLoading: false
        };
    }

    async componentDidMount() {

      this.getDataPatient()

    }

    getDataPatient = async () => {
      let {user} = this.props;
      let {currentDate} = this.state;
      let formatedDate = new Date(currentDate).getTime()
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
      }, async () => {

        await this.getDataPatient()
      });
    };

    handleBtnConfirm = (item) => {
      let data = {
        doctorId: item.doctorId,
        patientId: item.patientId,
        email: item.patientData.email,
        timeType: item.timeType,
        patientName: item.patientData.firstName
      }
      this.setState({
        isOpenRemedyModal: true,
        dataModal: data
      })
    }

    closeRemedyModal = () => {
      this.setState({
        isOpenRemedyModal: false,
        dataModal: {}
      })
    }

    sendRemedy = async (dataChildFromModal) => {
      let {dataModal} = this.state
      this.setState({
        isShowLoading: true
      })
      let res = await postSendRemedy({
        // ...dataChildFromModal

        email: dataChildFromModal.email,
        imgBase64: dataChildFromModal.imgBase64,
        doctorId: dataModal.doctorId ,
        timeType:dataModal.timeType ,
        patientId: dataModal.patientId ,
        language: this.props.language,
        patientName: dataModal.patientName
      })

      if(res && res.errCode === 0) {
        this.setState({
          isShowLoading: false
        })
        toast.success('send remedy succeed !')
        this.closeRemedyModal()
        await this.getDataPatient()
      }else{
        this.setState({
          isShowLoading: false
        })
        toast.error('Something Wrong!')
        console.log('error send remedy:',res)
      }
    }

    render() {
        let {dataPatient,isOpenRemedyModal, dataModal, isShowLoading} = this.state;
        let {language} = this.props;
        return (
          <>
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
                        let time = language === LANGUAGES.VI ? item.timeTypeDataPatient.valueVi : item.timeTypeDataPatient.valueEn
                        let gender = language === LANGUAGES.VI ? item.patientData.genderData.valueVi : item.patientData.genderData.valueEn
                        return (
                          <tr key = {index}>
                            <td>{index + 1}</td>
                            <td>{time}</td>
                            <td>{item.patientData.firstName}</td>
                            <td>{gender}</td>
                            <td>
                              <button className="btn btn-confirm"
                                onClick={() => this.handleBtnConfirm(item)}
                              >Xác nhận</button>
                            </td>
                          </tr>
                        )
                      })
                      :
                      <tr>
                        <td style={{textAlign:"center", color: "red"}} colSpan={5}> No Data ... ???</td>
                      </tr>
                    }
                    
                    </tbody>
                  </table>     
                  </div>
              </div>
            </div>
            <RemedyModal 
            isOpenRemedyModal = {isOpenRemedyModal}
            dataModal = {dataModal}
            isCloseRemedyModal = {this.closeRemedyModal}
            sendRemedy={this.sendRemedy}
            />
            <LoadingOverlay
              active={isShowLoading}
              spinner
              text='Ping 999. Đợi em tí...'
              >
            </LoadingOverlay>
          </>
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
