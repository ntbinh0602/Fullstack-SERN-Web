import React, { Component } from "react";
import { connect } from "react-redux";
import "./RemedyModal.scss"
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import _ from "lodash";
import { LANGUAGES, CommonUtils } from "../../../utils";

import { toast } from "react-toastify";
import moment from "moment";

class RemedyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            imgBase64: ''
        };
    }

    componentDidMount() {
        if( this.props.dataModal){
            this.setState({
                email: this.props.dataModal.email
            })
        }

    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
      
        }

        if(prevProps.dataModal !== this.props.dataModal){
            this.setState({
                email: this.props.dataModal.email
            })
        }


    }

    handleOnchangeEmail = (event) => {
        this.setState({
        email: event.target.value
        })
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
          let base64 = await CommonUtils.getBase64(file);
          let objectUrl = URL.createObjectURL(file);
          this.setState({
            imgBase64: base64,
          });
        }
      };

      handleSendRemedy = () => {
        this.props.sendRemedy(this.state)
      }

    render() {

        let {isOpenRemedyModal,isCloseRemedyModal, dataModal,sendRemedy} = this.props
        return (
            <Modal isOpen={isOpenRemedyModal} className={'booking-modal-container'} size="lg" centered>
                <div className="modal-header">
                    <h5 className="modal-title">Gửi hóa đơn khám bệnh thành công
                    </h5>
                    <button onClick={isCloseRemedyModal} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
               <ModalBody>
                    <div className="row">
                        <div className="col-6 form-group">
                            <label>Email bệnh nhân</label>
                            <input onChange={(event) => this.handleOnchangeEmail(event)} type="email" value={this.state.email} className="form-control"/>
                        </div>
                        <div className="col-6 form-group">
                            <label>Chọn file đơn thuốc</label>
                            <input type="file" className="form-control-file" onChange={(event) => this.handleOnchangeImage(event)} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.handleSendRemedy()}>Send</Button>
                    <Button color="secondary" onClick={isCloseRemedyModal} >Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genders: state.admin.genders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);
