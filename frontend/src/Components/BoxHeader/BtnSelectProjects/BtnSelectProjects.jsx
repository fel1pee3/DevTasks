import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
                    <div className={style.boxProjectsRecent}>
                        <h5 className={style.nameRecent}>Recentes</h5>
                        <Link to="/" className={style.projectRecent}>
                            <h3 className={style.nameProject}>Nome do Projeto <span className={style.nameKey}>(Chave)</span></h3>
                            <p className={style.typeProject}>Tipo de Projeto</p>
                        </Link>
                        <Link to="/" className={style.projectRecent}>
                            <h3 className={style.nameProject}>Nome do Projeto <span className={style.nameKey}>(Chave)</span></h3>
                            <p className={style.typeProject}>Tipo de Projeto</p>
                        </Link>
                    </div>
                    <div className={style.outhesLinks}>
                        <Link to="/" className={style.linkOuthes}>Vizualizar todos os projetos</Link>
                        <Link to="/CreateProject" className={style.linkOuthes}>Criar Projeto</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BtnSelect02