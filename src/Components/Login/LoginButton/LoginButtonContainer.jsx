import React from "react";
import LoginButton from "./LoginButton";
import axios from "axios";
import { setUserData } from "../../../redux/authReducer";
import { connect } from "react-redux";

export class LoginButtonAPIContainer extends React.Component {

    auth = () => {
        debugger
        let token = this.props.token 
        if (token === null) 
            token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidXNlcjIiLCJpYXQiOjE3NDEyMDQzMDAsImV4cCI6MTc0MTI5MDcwMH0.TL3bPuxV0IZVbG-hMm_KB3B7lcmn3gVQ6SKNSi2TznI"//this.props.token; 
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }

        axios.get(`http://localhost:8089/auth/user`, config ).then((response) => {
            debugger
            this.props.setUserData({login: response.data.user.username, userId: response.data.user.userId}, true)
        }).catch((error) => {
            debugger
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