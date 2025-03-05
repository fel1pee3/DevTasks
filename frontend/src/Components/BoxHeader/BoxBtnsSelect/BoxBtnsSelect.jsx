import React from 'react'
import style from "./BoxBtnsSelect.module.css";
import BtnSelectWork from '../BtnSelectWork/BtnSelectWork';
import BtnSelect02 from '../BtnSelectProjects/BtnSelectProjects';
import BtnSelect03 from '../BtnSelectFilter/BtnSelectFilter';
import BtnCreate from '../BtnCreate/BtnCreate';

const BoxBtnsSelect = () => {
  return (
    <div className={style.boxBtnsSelect}>
        <BtnSelectWork />
        <BtnSelect02 />
        <BtnSelect03 />
        <BtnCreate />
    </div>
  )
}

export default BoxBtnsSelect