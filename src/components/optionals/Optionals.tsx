import React from "react";

import LevelSelector from "./selectors/LevelSelector";
import NationalSelector from "./selectors/nationalSelector";
import ShipTypeSelector from "./selectors/ShipTypeSelector";

import styles from './Optionals.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../redux/slices/itemsSlice";

const Optionals = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.main);
  const cleanTable = data.data.length === data.filteredData.length ? true : false;

  return (
    <div className={styles.wrapper}>
      <LevelSelector cleanTable={cleanTable}/>
      <NationalSelector cleanTable={cleanTable}/>
      <ShipTypeSelector cleanTable={cleanTable}/>
      <button onClick={()=>{dispatch(resetFilter())}}>Очистить фильтрацию</button>
    </div>
  );
};

export default Optionals;
