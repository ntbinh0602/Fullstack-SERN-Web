import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import './ProfileDoctor.scss'
import { getProfileDoctorById } from '../../../services/userService'
import { LANGUAGES } from "../../../utils";
import NumberFormat from 'react-number-format';
import _ from "lodash";
import moment from "moment";



class DefaultClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProfile: {}
        };
    }

    async componentDidMount() {
        let data = await this.getInforDoctor(this.props.doctorId)
        this.setState({
            dataProfile: data
        })

    }

    getInforDoctor = async (id) => {
        let result = {};
        if (id) {
            let res = await getProfileDoctorById(id);
            if (res && res.errCode === 0) {
                result = res.data
            }
        }
        return result
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
        if (this.props.doctorId !== prevProps.doctorId) {
            // this.getInforDoctor(this.props.doctorId);
        }

    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    renderTimeBooking = (dataTime) => {
        let { language } = this.props
        if (dataTime && !_.isEmpty(dataTime)) {

            let time = language === LANGUAGES.VI ? dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn

            let date = language === LANGUAGES.VI ?
                this.capitalizeFirstLetter(
                    moment.unix(+dataTime.date / 1000).format('dddd - DD/MM/YYYY')
                ) :
                moment.unix(+dataTime.date / 1000).locale('en').format('ddd - YYYY/MM/DD')

            return (
                <>
                    <div>{time} - {date}</div>
                    <div><FormattedMessage id="patient.booking-modal.free-booking" /></div>
                </>
            )
        }
        return <></>
    }

    render() {
        let { dataProfile } = this.state
        let { language, isShowDescriptionDoctor, dataTime } = this.props;
        let nameVi = "",
            nameEn = "";
        if (dataProfile && dataProfile.positionData) {
            nameVi = `${dataProfile.positionData.valueVi}, ${dataProfile.lastName} ${dataProfile.firstName}`;
            nameEn = `${dataProfile.positionData.valueEn}, ${dataProfile.firstName} ${dataProfile.lastName}`;
        }
        return (
            <div className="intro-doctor">
                <div className="intro-doctor-box">
                    <div className="content-left">
                        <img
                            className="img-doctor"
                            src={
                                dataProfile && dataProfile.image ? dataProfile.image : ""
                            }
                        ></img>
                    </div>
                    <div className="content-right">
                        <div className="up">
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                        </div>
                        <div className="down">
                            {
                                isShowDescriptionDoctor === true ?
                                    <>
                                        {dataProfile &&
                                            dataProfile.Markdown &&
                                            dataProfile.Markdown.description && (
                                                <span>{dataProfile.Markdown.description}</span>
                                            )}
                                    </> :
                                    <>
                                        {this.renderTimeBooking(dataTime)}
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <div className="price">
                    <span><FormattedMessage id="patient.booking-modal.price" /> </span>
                    {dataProfile && dataProfile.Doctor_Infor && language === LANGUAGES.VI &&
                        < NumberFormat
                            className='curency'
                            value={dataProfile.Doctor_Infor.priceTypeData.valueVi}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={'đ'}
                        />
                    }
                    {dataProfile && dataProfile.Doctor_Infor && language === LANGUAGES.EN &&
                        < NumberFormat
                            className='curency'
                            value={dataProfile.Doctor_Infor.priceTypeData.valueEn}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={'$'}
                        />
                    }
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);
