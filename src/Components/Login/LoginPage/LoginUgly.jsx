import { Field, reduxForm } from "redux-form"


export const LoginFormUgly = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"username"}  component={"input"} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"} />
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