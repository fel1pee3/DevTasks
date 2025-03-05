import React, { useState } from 'react'
import style from "./BtnSelectWork.module.css";

const BtnSelectWork = () => {

    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={style.boxSelect}>
            <button className={style.btnSelect} onClick={toggleVisibility}>
                Seu Trabalho
            </button>

            {isVisible && (
                <div className={style.boxItensSelect}>
                    <button>Botão 1</button>
                    <button>Botão 2</button>
                    <button>Botão 3</button>
                </div>
            )}
        </div>
    )
}

export default BtnSelectWork