import React from 'react'
import style from "./BoxBtnsSelect.module.css";
import BtnSelectWork from '../BtnSelectWork/BtnSelectWork';
import BtnSelectProjects from '../BtnSelectProjects/BtnSelectProjects';
import BtnSelectFilter from '../BtnSelectFilter/BtnSelectFilter';
import BtnCreate from '../BtnCreate/BtnCreate';
import BoxSearch from '../BoxSearch/BoxSearch';
import BtnUser from '../BtnUser/BtnUser';

const BoxBtnsSelect = () => {
  return (
    <div className={style.boxBtnsSelect}>
        <div className={style.boxBtns}>
          <BtnSelectWork />
          <BtnSelectProjects />
          <BtnSelectFilter />
          <BtnCreate />
        </div>
        <div className={style.boxOthersBtns}>
          <BoxSearch />
          <BtnUser />
        </div>
    </div>
  )
}

export default BoxBtnsSelect