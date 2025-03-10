import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo-semfundo.png'
import style from "./Header.module.css";
import BoxBtnsSelect from '../BoxHeader/BoxBtnsSelect/BoxBtnsSelect';

const Header = () => {

    return (
        <div className={style.header}>
            <Link to='/' className={style.boxLogo}>
                <img className={style.imgLogoIcon} src={Logo} alt="logo icon" />
                <h4 className={style.imgLogoName}>DevTasks</h4>
            </Link>
            <BoxBtnsSelect />
        </div>
    )
}

export default Header