import React, { useState } from 'react'
import style from "./BtnSelect01.module.css";

const BtnSelect01 = () => {

    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={style.boxSelect}>
            <button className={style.btnSelect} onClick={toggleVisibility}>
                Clique para mostrar os botões
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

export default BtnSelect01