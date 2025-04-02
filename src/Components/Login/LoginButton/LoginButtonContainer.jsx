import React from "react";
import LoginButton from "./LoginButton";
import { logoutTC, setUserData } from "../../../redux/authReducer";
import { connect } from "react-redux";


export class LoginButtonAPIContainer extends React.Component {

    render() {
        return (
            <LoginButton {...this.props} />
        );
    }

}


const mapStateToProps = (state) => {
    let newState = {...state.authState}
    return newState
}

const LoginButtonContainer = connect(mapStateToProps,
    {
        setUserData,
        logoutTC
    }
)(LoginButtonAPIContainer)

export default LoginButtonContainer