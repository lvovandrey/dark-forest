import { setUserData } from "../../../redux/authReducer";
import { connect } from "react-redux";
import { LoginForm } from "./LoginForm";

const mapStateToProps = (state) => {
    let newState = {...state.authState}
    return newState
}

const LoginFormContainer = connect(mapStateToProps,
    {
        setUserData
    }
)(LoginForm)

export default LoginFormContainer