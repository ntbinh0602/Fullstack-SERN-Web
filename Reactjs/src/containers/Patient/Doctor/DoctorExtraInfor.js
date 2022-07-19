import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
import { FormattedMessage } from "react-intl";

import localization from "moment/locale/vi";
import { LANGUAGES } from "../../../utils";
import moment from "moment";
import { getExtraInforDoctorById } from "../../../services/userService";
import NumberFormat from 'react-number-format';

class DoctorExtraInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false,
            extraInfor: {}
        };
    }

    async componentDidMount() {
        if(this.props.doctorIdFromParent) {
            let res = await getExtraInforDoctorById(this.props.doctorIdFromParent)
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }

        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
            let res = await getExtraInforDoctorById(this.props.doctorIdFromParent)
            if (res && res.errCode === 0) {
                this.setState({
                    extraInfor: res.data
                })
            }
        }
    }

    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }

    render() {
        let { isShowDetailInfor, extraInfor } = this.state;
        let { language } = this.props
        console.log('check state data:', extraInfor)

        return (
            <div className="doctor-extra-infor-container">
                <div className="content-top">
                    <div className="address-title"><FormattedMessage id="patient.extra-infor-doctor.text-address" /></div>
                    <div className="name-clinic">{extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ""}</div>
                    <div className="address-clinic">{extraInfor && extraInfor.addressClinic ? extraInfor.addressClinic : ""}</div>
                </div>
                <div className="content-bottom">

                    {isShowDetailInfor === false &&
                        <div className="show-btn">
                            <FormattedMessage id="patient.extra-infor-doctor.price" />: {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI &&
                                < NumberFormat
                                    className='curency'
                                    value={extraInfor.priceTypeData.valueVi}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    suffix={'đ'}
                                />
                            }
                            {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN &&
                                < NumberFormat
                                    className='curency'
                                    value={extraInfor.priceTypeData.valueEn}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    suffix={'$'}
                                />
                            }
                            .<span className="view-detail-btn" onClick={() => this.showHideDetailInfor(true)}><FormattedMessage id="patient.extra-infor-doctor.view-detail" /></span>
                        </div>
                    }
                    {isShowDetailInfor === true &&
                        <>
                            <div className="title-price"><FormattedMessage id="patient.extra-infor-doctor.price" />:</div>
                            <div className="detail-infor">
                                <div className="price">
                                    <span className="left"><FormattedMessage id="patient.extra-infor-doctor.price" /></span>
                                    <span className="right">
                                        {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI &&
                                            < NumberFormat
                                                className='curency'
                                                value={extraInfor.priceTypeData.valueVi}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                suffix={'đ'}
                                            />
                                        }
                                        {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN &&
                                            < NumberFormat
                                                className='curency'
                                                value={extraInfor.priceTypeData.valueEn}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                suffix={'$'}
                                            />
                                        }
                                    </span>
                                </div>
                                <div className="note">{extraInfor && extraInfor.note ? extraInfor.note : ""}</div>
                            </div>
                            <div className="payment"><FormattedMessage id="patient.extra-infor-doctor.payment" />
                                {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.VI ?
                                    extraInfor.paymentTypeData.valueVi : ""}
                                {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.EN ?
                                    extraInfor.paymentTypeData.valueEn : ""}
                            </div>
                            <div className="hide-btn">
                                <span onClick={() => this.showHideDetailInfor(false)} ><FormattedMessage id="patient.extra-infor-doctor.hide" /></span>
                            </div>
                        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
