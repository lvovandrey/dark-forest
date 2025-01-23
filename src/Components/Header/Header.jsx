import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.head}>
            <img className={css.app_logo} alt='logo' src="https://ih1.redbubble.net/image.440441354.7484/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg" />
        </div>
    )
}

export default Header;