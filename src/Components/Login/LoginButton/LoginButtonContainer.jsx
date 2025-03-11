import React from "react";
import LoginButton from "./LoginButton";
import { setUserData } from "../../../redux/authReducer";
import { connect } from "react-redux";
import { APIAuth } from "../../../Api/apiAuth";

export class LoginButtonAPIContainer extends React.Component {

    auth = () => {
        APIAuth.auth(this.props.token ).then((data) => {
            this.props.setUserData({login: data.user.username, userId: data.user.userId}, true)
        }).catch((error) => {
            this.props.setUserData({login:null, userId: null}, false)
        });
    }

    componentDidMount() {
        this.auth()
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
        setUserData
    }
)(LoginButtonAPIContainer)

export default LoginButtonContainer