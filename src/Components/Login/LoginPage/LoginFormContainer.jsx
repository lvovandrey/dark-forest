import { loginTC, setUserData } from "../../../redux/authReducer";
import { connect } from "react-redux";
import { LoginForm } from "./LoginForm";
import { LoginFormUgly } from "./LoginFormUgly";

const mapStateToProps = (state) => {
    let newState = {...state.authState}
    return newState
}

const LoginFormContainer = connect(mapStateToProps,
    {
        setUserData,
        loginTC
    }
)(LoginFormUgly)

export default LoginFormContainer