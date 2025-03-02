import React from "react";
import logo192 from '../../../assets/logo192.png'
import css from './Preloader.module.css'


export const Preloader = (props) =>  <>
        {props.isFetching ? <img className={css.app_logo} src = {logo192} alt='Wait...' /> : null}
</>
