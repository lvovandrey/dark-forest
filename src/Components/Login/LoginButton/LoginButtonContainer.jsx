import React from "react";
import LoginButton from "./LoginButton";
import { authTC, setUserData } from "../../../redux/authReducer";
import { connect } from "react-redux";


export class LoginButtonAPIContainer extends React.Component {

    componentDidMount() {
        this.props.authTC()
    }

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
        authTC
    }
)(LoginButtonAPIContainer)

export default LoginButtonContainer