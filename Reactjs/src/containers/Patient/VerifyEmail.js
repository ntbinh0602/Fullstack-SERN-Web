import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { postVerifyBookAppointment } from "../../services/userService"
import HomeHeader from '../HomePage/HomeHeader'
import './VerifyEmail.scss'


class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 0
        };
    }

    async componentDidMount() {
        if (this.props.location && this.props.location.search) {

            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token')
            let doctorId = urlParams.get('doctorId');
            let res = await postVerifyBookAppointment({
                token: token,
                doctorId: doctorId
            })

            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }

    }


    render() {
        let { statusVerify, errCode } = this.state

        return (
            <>
                <HomeHeader />
                {statusVerify === false ?
                    <div className="container">
                        <div className="box-verify">
                            <div className="loading-data">
                                <span>Loading data...</span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="box-verify ">
                            {errCode === 0 ?
                                <div className="confirm-appointment">
                                    <span className="sp1"><i className="far fa-check-circle"></i></span>
                                    <span className="sp2">Nice! <i className="fas fa-thumbs-up"></i></span>
                                    <span className="sp3">Xác nhận lịch hẹn thành công</span>
                                </div > :
                                <div className="no-appointment">
                                    <span className="sp1"><i className="far fa-times-circle"></i></span>
                                    <span className="sp2">Oh no! <i className="fas fa-thumbs-down"></i></span>
                                    <span className="sp3">
                                        Lịch hẹn không tồn tại hoặc đã được xác nhận
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                }
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
