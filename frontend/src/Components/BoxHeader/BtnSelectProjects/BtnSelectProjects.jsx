import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import style from "./BtnSelectProjects.module.css";

const BtnSelect02 = () => {

    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={style.boxSelect}>
            <button className={style.btnSelect} onClick={toggleVisibility}>
                Projetos <IoIosArrowDown className={style.iconArrowD}/>
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

export default BtnSelect02