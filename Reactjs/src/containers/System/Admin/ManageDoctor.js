import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageDoctor.scss";
import * as actions from "../../../store/actions";
import { FormattedMessage } from "react-intl";
import * as ReactDOM from "react-dom";
import { LANGUAGES } from "../../../utils";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import { getDetailInforDoctor } from "../../../services/userService";
import { CRUD_ACTIONS } from "../../../utils";

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // save to Markdown table
      contentMarkdown: "",
      contentHTML: "",
      selectedDoctor: null,
      description: "",
      listDoctors: [],
      hasOldData: false,

      // save to doctor_infor table
      listPrice: [],
      listPayment: [],
      listProvince: [],
      selectedPrice: "",
      selectedPayment: "",
      selectedProvince: "",
      nameClinic: "",
      addressClinic: "",
      note: ""
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctor();
    this.props.getAllRequiredDoctorInfor();
  }

  buildDataInputSelect = (inputData, type) => {
    let result = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      if (type === 'USERS') {
        inputData.map((item, index) => {
          let object = {};
          let labelVi = `${item.lastName} ${item.firstName}`;
          let labelEn = `${item.firstName} ${item.lastName}`
          object.label = language === LANGUAGES.VI ? labelVi : labelEn;
          object.value = item.id;
          result.push(object);
        });
      }
      if (type === 'PRICE') {
        inputData.map((item, index) => {
          let object = {};
          let labelVi = `${item.valueVi}`;
          let labelEn = `${item.valueEn} $`
          object.label = language === LANGUAGES.VI ? labelVi : labelEn;
          object.value = item.keyMap;
          result.push(object);
        });
      }
      if (type === 'PAYMENT' | type === 'PROVINCE') {
        inputData.map((item, index) => {
          let object = {};
          let labelVi = `${item.valueVi}`;
          let labelEn = `${item.valueEn}`
          object.label = language === LANGUAGES.VI ? labelVi : labelEn;
          object.value = item.keyMap;
          result.push(object);
        });
      }
    }
    return result;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors, 'USERS');
      this.setState({
        listDoctors: dataSelect,
      });
    }

    if (prevProps.language !== this.props.language) {
      let { resPayment, resPrice, resProvince } = this.props.allRequiredDoctorInfor
      let dataSelect = this.buildDataInputSelect(this.props.allDoctors, 'USERS');
      let dataSelectPrice = this.buildDataInputSelect(resPrice, 'PRICE');
      let dataSelectPayment = this.buildDataInputSelect(resPayment, 'PAYMENT');
      let dataSelectProvince = this.buildDataInputSelect(resProvince, 'PROVINCE');
      this.setState({
        listDoctors: dataSelect,
        listPrice: dataSelectPrice,
        listPayment: dataSelectPayment,
        listProvince: dataSelectProvince,
      });
    }
    if (prevProps.allRequiredDoctorInfor !== this.props.allRequiredDoctorInfor) {
      let { resPayment, resPrice, resProvince } = this.props.allRequiredDoctorInfor
      let dataSelectPrice = this.buildDataInputSelect(resPrice, 'PRICE');
      let dataSelectPayment = this.buildDataInputSelect(resPayment, 'PAYMENT');
      let dataSelectProvince = this.buildDataInputSelect(resProvince, 'PROVINCE');
      console.log('check data fron cc:', dataSelectPrice, dataSelectPayment, dataSelectProvince)
      this.setState({
        listPrice: dataSelectPrice,
        listPayment: dataSelectPayment,
        listProvince: dataSelectProvince,
      })
    }
  }

  // Finish!
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  handleSaveContentMarkdown = () => {
    let { hasOldData } = this.state;
    this.props.saveDetailDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedDoctor.value,
      action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
      selectedPrice: this.state.selectedPrice.value,
      selectedPayment: this.state.selectedPayment.value,
      selectedProvince: this.state.selectedProvince.value,
      nameClinic: this.state.nameClinic,
      addressClinic: this.state.addressClinic,
      note: this.state.note
    });
  };



  handleChangeSelect = async (selectedOption) => {
    this.setState({ selectedDoctor: selectedOption });
    let { listPayment, listPrice, listProvince } = this.state
    let res = await getDetailInforDoctor(selectedOption.value);
    if (res && res.errCode === 0 && res.data && res.data.Markdown) {
      let markdown = res.data.Markdown;
      let addressClinic = '', nameClinic = '', note = '', priceId = '',
        paymentId = '', provinceId = '', selectedPayment = '', selectedPrice = '', selectedProvince = '';

      if (res.data.Doctor_Infor) {
        addressClinic = res.data.Doctor_Infor.addressClinic
        nameClinic = res.data.Doctor_Infor.nameClinic
        note = res.data.Doctor_Infor.note

        paymentId = res.data.Doctor_Infor.paymentId;
        priceId = res.data.Doctor_Infor.priceId;
        provinceId = res.data.Doctor_Infor.provinceId;

        selectedPayment = listPayment.find(item => {
          return item && item.value === paymentId
        })
        selectedPrice = listPrice.find(item => {
          return item && item.value === priceId
        })
        selectedProvince = listProvince.find(item => {
          return item && item.value === provinceId
        })
      }



      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentMarkdown,
        description: markdown.description,
        hasOldData: true,
        addressClinic: addressClinic,
        nameClinic: nameClinic,
        note: note,
        selectedPayment: selectedPayment,
        selectedPrice: selectedPrice,
        selectedProvince: selectedProvince
      });
    } else {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
        hasOldData: false,
        addressClinic: "",
        nameClinic: "",
        note: "",
      });
    }
  };

  handleChangeSelectDoctorInfor = async (selectedOption, name) => {
    let stateName = name.name;
    let stateCopy = { ...this.state };
    stateCopy[stateName] = selectedOption;
    this.setState({
      ...stateCopy
    })
    console.log('check data from selected:', selectedOption, stateName)
  }

  handleOnChangeText = (event, id) => {
    let stateCopy = { ...this.state }
    stateCopy[id] = event.target.value;
    this.setState({
      ...stateCopy
    })
  };

  render() {
    let { hasOldData } = this.state;
    console.log('check state:', this.state)
    return (
      <div className="manage-doctor-container">
        <div className="manage-doctor-title"><FormattedMessage id="admin.manage-doctor.title" /></div>
        <div className="more-infor">
          <div className="content-left form-group">
            <lable><FormattedMessage id="admin.manage-doctor.select-doctor" /></lable>
            <Select
              value={this.state.selectedDoctor}
              onChange={this.handleChangeSelect}
              options={this.state.listDoctors}
              placeholder={<FormattedMessage id="admin.manage-doctor.select-doctor" />}
            />
          </div>
          <div className="content-right form-group">
            <lable><FormattedMessage id="admin.manage-doctor.introduction" /></lable>
            <textarea
              className="form-control"
              rows="4"
              onChange={(event) => this.handleOnChangeText(event, 'description')}
              value={this.state.description}
            >
            </textarea>
          </div>
        </div>
        <div className="more-infor-extra row">
          <div className="col-4 form-group">
            <label><FormattedMessage id="admin.manage-doctor.price" /></label>
            <Select
              value={this.state.selectedPrice}
              onChange={this.handleChangeSelectDoctorInfor}
              options={this.state.listPrice}
              placeholder={<FormattedMessage id="admin.manage-doctor.price" />}
              name='selectedPrice'
            />
          </div>
          <div className="col-4 form-group">
            <label><FormattedMessage id="admin.manage-doctor.payment" /></label>
            <Select
              value={this.state.selectedPayment}
              onChange={this.handleChangeSelectDoctorInfor}
              options={this.state.listPayment}
              placeholder={<FormattedMessage id="admin.manage-doctor.payment" />}
              name='selectedPayment'
            />
          </div>
          <div className="col-4 form-group">
            <label><FormattedMessage id="admin.manage-doctor.province" /></label>
            <Select
              value={this.state.selectedProvince}
              onChange={this.handleChangeSelectDoctorInfor}
              options={this.state.listProvince}
              placeholder={<FormattedMessage id="admin.manage-doctor.province" />}
              name="selectedProvince"
            />
          </div>
          <div className="col-4 form-group">
            <label><FormattedMessage id="admin.manage-doctor.name-clinic" /></label>
            <input className="form-control"
              onChange={(event) => this.handleOnChangeText(event, 'nameClinic')}
              value={this.state.nameClinic} />
          </div>
          <div className="col-4 form-group">
            <label><FormattedMessage id="admin.manage-doctor.address-clinic" /></label>
            <input className="form-control"
              onChange={(event) => this.handleOnChangeText(event, 'addressClinic')}
              value={this.state.addressClinic} />
          </div>
          <div className="col-4 form-group">
            <label><FormattedMessage id="admin.manage-doctor.note" /></label>
            <input className="form-control"
              onChange={(event) => this.handleOnChangeText(event, 'note')}
              value={this.state.note} />
          </div>
        </div>
        <div className="manage-doctor-editor">
          <MdEditor
            style={{ height: "500px", marginBottom: "30px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
            value={this.state.contentMarkdown}
          />
        </div>
        <button
          onClick={() => this.handleSaveContentMarkdown()}
          className={
            hasOldData === true
              ? "save-content-doctor"
              : "create-content-doctor"
          }
        >
          {hasOldData === true ? (
            <span><FormattedMessage id="admin.manage-doctor.save" /></span>
          ) : (
            <span><FormattedMessage id="admin.manage-doctor.create" /></span>
          )}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allDoctors: state.admin.allDoctors,
    language: state.app.language,
    allRequiredDoctorInfor: state.admin.allRequiredDoctorInfor
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data)),
    getAllRequiredDoctorInfor: () => dispatch(actions.getRequiredDoctorInfor()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
