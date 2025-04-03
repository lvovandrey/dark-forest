import React from "react";
import LoginButton from "./LoginButton";
import { logoutTC, setUserData } from "../../../redux/authReducer";
import { connect } from "react-redux";
import { getAuthStateSL } from "../../../redux/selectors/authSelectors";


export class LoginButtonAPIContainer extends React.Component {

    render() {
        return (
            <LoginButton {...this.props} />
        );
    }

}


const mapStateToProps = (state) => getAuthStateSL(state)

const LoginButtonContainer = connect(mapStateToProps,
    {
        setUserData,
        logoutTC
    }
)(LoginButtonAPIContainer)

export default LoginButtonContainer