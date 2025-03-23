import { NavLink } from 'react-router';
import css from './LoginButton.module.css'
import { Button, Typography } from "antd";

const LoginButton = (props) => {
    return (
        <div className={css.navigation} >
            <div className={css.login_block}>
                <NavLink to={'/login'}>
                    <Button type="primary" href={'/login'} >
                        <Typography strong level={2} className={css.login_label} >
                            {props.isAuth ? props.login : 'Log in'}
                        </Typography>
                    </Button>
                </NavLink>
                {
                    props.isAuth
                        ? <Button type="primary" onClick={props.logoutTC} >
                            <Typography strong level={2} className={css.login_label} >
                                Log out
                            </Typography>
                        </Button>
                        : <></>
                }

            </div>
        </div >
    )
}

export default LoginButton;