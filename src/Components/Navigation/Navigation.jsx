import { NavLink } from 'react-router';
import css from './Navigation.module.css'
import LoginButtonContainer from '../Login/LoginButton/LoginButtonContainer';

const Navigation = () => {
    return (
        <div className={css.navigation} >
            <NavLink to="/game" className={({ isActive }) => (isActive ? css.activelink : "")}>
                Симулятор выживания
            </NavLink>
            <NavLink to="/race" className={({ isActive }) => (isActive ? css.activelink : "")}>
                Создание расы
            </NavLink>
            <NavLink to="/players" className={({ isActive }) => (isActive ? css.activelink : "")}>
                Выбор игроков
            </NavLink>
            <LoginButtonContainer />
        </div >
    )
}

export default Navigation;