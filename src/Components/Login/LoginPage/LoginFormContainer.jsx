import { loginTC, setUserData } from "../../../redux/authReducer";
import { connect } from "react-redux";
import { LoginUgly } from "./LoginUgly";
import { getAuthStateSL } from "../../../redux/selectors/authSelectors";

const onSubmit = (values) => {
    alert(values)
    console.log(values)
    loginTC(values, onFinishFailed)
}

const onFinishFailed = (errorInfo) => {
    alert('Autorization failed', JSON.stringify(errorInfo))
  };


const mapStateToProps = (state) => {
    let newState = {...getAuthStateSL(state), onSubmit}
    return newState
}

const LoginFormContainer = connect(mapStateToProps,
    {
        setUserData,
        loginTC
    }
)(LoginUgly)

export default LoginFormContainer