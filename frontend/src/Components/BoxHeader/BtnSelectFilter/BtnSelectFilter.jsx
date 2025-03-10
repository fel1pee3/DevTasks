import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from "./BtnSelectFilter.module.css";

const BtnSelectFilter = () => {

    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={style.boxSelect}>
            <Link to="/" className={style.btnSelect} onClick={toggleVisibility}>
                Filtros
            </Link>
        </div>
    )
}

export default BtnSelectFilter