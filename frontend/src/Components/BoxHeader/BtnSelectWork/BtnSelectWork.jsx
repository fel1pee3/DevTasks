import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import style from "./BtnSelectWork.module.css";

const BtnSelectWork = () => {

    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={style.boxSelect}>
            <Link to='/' className={style.btnSelect} onClick={toggleVisibility}>
                Seu Trabalho
            </Link>
        </div>
    )
}

export default BtnSelectWork