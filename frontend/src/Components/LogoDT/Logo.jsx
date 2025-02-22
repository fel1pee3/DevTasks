import React from 'react'
import Logo from '../../../images/logo-semfundo.png'
import style from './Logo.module.css'

const LogoDT = () => {
  return (
    <div className={style.logoBox}>
        <img className={style.logo} src={Logo} alt="logo" />
        <h4 className={style.nomeLogo}>DevTasks</h4>
    </div>
  )
}

export default LogoDT