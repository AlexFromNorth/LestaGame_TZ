import React from "react";

import LevelSelector from "./selectors/LevelSelector";
import NationalSelector from "./selectors/nationalSelector";
import ShipTypeSelector from "./selectors/ShipTypeSelector";

import styles from './Optionals.module.scss'
import { useDispatch } from "react-redux";
import { resetFilter } from "../../redux/slices/itemsSlice";

const Optionals = () => {
  const dispatch = useDispatch()



  return (
    <div className={styles.wrapper}>
      <LevelSelector />
      <NationalSelector />
      <ShipTypeSelector />
      <button onClick={()=>{dispatch(resetFilter())}}>Очистить фильтрацию</button>
    </div>
  );
};

export default Optionals;
