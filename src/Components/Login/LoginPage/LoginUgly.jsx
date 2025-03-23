import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../Utils/Validators/validators";
import ParameterEditor from "../../Common/ParameterEditor/ParameterEditor";
import { Navigate } from "react-router";


export const LoginFormUgly = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field title='Логин' name={"username"}   component={ParameterEditor} validate={[required, maxLengthCreator(15)]} />
            </div>
            <div>
                <Field title='Пароль' name={"password"}  component={ParameterEditor} validate={[required, maxLengthCreator(15)]} />
            </div>
            <div>
                <label>
                    <Field type="checkbox" name={"rememberme"} component={"input"} />
                    Remember
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )

}

export const LoginUgly = (props) => {
    
    const onSubmit = (values, dispatch) => {
        debugger
           props.loginTC(values, onFinishFailed)
      };

      const onFinishFailed = (errorInfo) => {
        alert("Login Error ", JSON.stringify(errorInfo))
      };

      if (props.isAuth === true)
        return <Navigate to='/race' />

      return (
        <div>
            <h1>Login</h1>
            <LoginReduxFormUgly {...props} onSubmit={onSubmit} />
        </div>
    )

}

export const LoginReduxFormUgly = reduxForm({
    // a unique name for the form
    form: 'login',
  })(LoginFormUgly)