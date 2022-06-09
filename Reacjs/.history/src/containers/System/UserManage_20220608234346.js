import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUser } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    let response = await getAllUser("All");
    console.log("getAllUser:", response);
  }

  /**
   * Life cycle
   * 1. Run construct -> init state
   * 2. Did mount (set state)
   * + goi API
   * + set state
   * 3. Render
   *
   */

  render() {
    return (
      <div className="users-container">
        <div className="title text-center">Manage users</div>
        <div className="users-table mt-4 mx-1">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Ok</td>
              <button>Germany</button>
              <button>Germany</button>
              <button>Germany</button>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
