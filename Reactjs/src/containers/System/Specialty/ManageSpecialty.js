import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import './ManageSpecialty.scss'


class ManageSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {


    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }

    }


    render() {

        return (
            <div>
                hellle Specialrty
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);
