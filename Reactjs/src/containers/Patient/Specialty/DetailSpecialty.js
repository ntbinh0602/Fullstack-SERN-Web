import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import './DetailSpecialty.scss'
import HomeHeader from "../../HomePage/HomeHeader";
import DoctorSchedule from "../Doctor/DoctorSchedule";
import DoctorExtraInfor from "../Doctor/DoctorExtraInfor";
import ProfileDoctor from '../Doctor/ProfileDoctor'



class DetailSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [6,5,4]
        };
    }

    componentDidMount() {
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }

    }



    render() {
        let {arrDoctorId} = this.state
        return (
            <div className="detail-specialty-container">
                    <HomeHeader/>
                    <div className="description-specialty">
                        <div className="description-specialty-content">
                        <h3>Cơ Xương Khớp</h3>
                            Bác sĩ Cơ Xương Khớp giỏi<br/>
                            Danh sách các bác sĩ uy tín đầu 
                            ngành Cơ Xương Khớp tại Việt Nam:<br/>

                            Các chuyên gia có quá trình đào tạo bài bản, 
                            nhiều kinh nghiệm<br/>
                            Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và 
                            giảng dạy tại Đại học Y khoa Hà Nội<br/>
                            Các bác sĩ đã, đang công tác tại các bệnh viện hàng 
                            đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện 
                            Hữu nghị Việt Đức,Bệnh Viện E.<br/>
                            Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: 
                            Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...<br/>
                            Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, 
                            Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...<br/>
                        </div>
                    </div>

                    {arrDoctorId && arrDoctorId.length > 0 &&
                    arrDoctorId.map((item, index) => {
                        return (
                            <div className="each-doctor" key = {index}>
                                <div className="dt-content-left">
                                    <div className="profile-doctor">
                                        <ProfileDoctor
                                            doctorId={item}
                                            isShowDescriptionDoctor={true}
                                            // dataTime={dataTime}
                                        />
                                    </div>
                                </div>
                                <div className="dt-content-right">
                                    <div className="doctor-schedule">
                                        <DoctorSchedule
                                            
                                            doctorIdFromParent={item}
                                        />
                                    </div>
                                    <div className="doctor-extra-infor">
                                        <DoctorExtraInfor
                                            doctorIdFromParent={item}
                                        />
                                    </div>

                                </div>
                            </div> 
                        )
                    })
                    }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty)
