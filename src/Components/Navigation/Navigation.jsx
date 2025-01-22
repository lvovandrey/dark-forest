import css from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={css.navigation} >
            <ul>
                <li><a href="/">Симулятор</a></li>
                <li><a href="/rules">Правила</a></li>
            </ul>
        </nav >
    )
}

export default Navigation;