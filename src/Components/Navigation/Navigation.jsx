import { NavLink } from 'react-router';
import css from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={css.navigation} >
            <NavLink to="/" className={({ isActive }) =>(isActive ? css.activelink : "")}>
                Симулятор выживания
            </NavLink>
            <NavLink to="/race" className={({ isActive }) =>(isActive ? css.activelink : "")}>
                Создание расы
            </NavLink>
        </div >
    )
}

export default Navigation;