import React, { useState } from 'react'
import Logo from '../../../images/logo-semfundo.png'
import style from "./Header.module.css";
import BoxBtnsSelect from '../BoxBtnsSelect/BoxBtnsSelect';

const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.boxLogo}>
                <img className={style.imgLogoIcon} src={Logo} alt="logo icon" />
                <h4 className={style.imgLogoName}>DevTasks</h4>
            </div>
            <BoxBtnsSelect />
        </div>
    )
}

export default Header