import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Img from "../../../assets/images/bo-cong-thuong.svg"

import "../HomePage.scss";

class Contact extends Component {
  render() {
    return (
      <div className="section-share section-dark section-auto-size">
        <div className="section-content">
          <div className="section-contact-content">
                <div className="content-left">
                    <div className="contact-logo">
                    </div>
                    <div className="address-policy">
                        <div className="address-policy-company">
                            Công ty TNHH một thành viên Bookingcare
                        </div>
                        <div className="address">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>71 Tôn Đản - Hòa An - Cẩm Lệ - Đà Nẵng</span>
                        </div>
                        <div className="policy">
                            <i className="fas fa-check"></i>
                            <span> ĐKKD số: 01067915654. Sở KHĐT Đà Nẵng cấp ngày 16/03/2035</span>
                        </div>
                    </div>
                    <div className="verify">
                        <img src={Img} width="78" height="30" data-src="/assets/icon/bo-cong-thuong.svg" alt="Đã thông báo với bộ công thương"/>
                        <img src={Img} width="78" height="30" data-src="/assets/icon/bo-cong-thuong.svg" alt="Đã thông báo với bộ công thương"/>
                    </div>
                </div>
                <div className="content-right">
                    <ul className="content-right-list">
                        <li>Liên hệ hợp tác</li>
                        <li>Tuyển dụng</li>
                        <li>Câu hỏi thường gặp</li>
                        <li>Điều khoản sử dụng</li>
                        <li>Chính sách Bảo mật</li>
                        <li>Quy trình hỗ trợ giải quyết khiếu nại</li>
                        <li>Quy chế hoạt động</li>
                    </ul>
                    <div className="content-right-address">
                        <div className="content-right-address-item">
                            <div>Trụ sở tại Đà Nẵng</div>
                            <div>28 Bắc Sơn, Hòa An, Cẩm Lệ, Đà Nẵng</div>
                        </div>
                        <div className="content-right-address-item">
                            <div>Văn phòng tại Hà Tĩnh</div>
                            <div>195 Văn Tây, Kỳ Văn, Kỳ Anh, Hà Tĩnh</div>
                        </div>
                        <div className="content-right-address-item">
                            <div>Hỗ trợ khách hàng</div>
                            <div>support@bookingcare.clone.vn (7h - 18h)</div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
