import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import style from './BoxSearch.module.css'

const BoxSearch = () => {
    return (
        <div className={style.boxSearch}>
            <IoSearchOutline className={style.iconSearch}/>
            <input className={style.inputSearch} type="text" name="" id=""   placeholder='Pesquisar' />
        </div>
    )
}

export default BoxSearch