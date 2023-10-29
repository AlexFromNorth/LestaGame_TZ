// components
import LevelSelector from "./selectors/LevelSelector";
import NationalSelector from "./selectors/NationalSelector";
import ShipTypeSelector from "./selectors/ShipTypeSelector";

// styles
import styles from './Optionals.module.scss'

// redux
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../redux/slices/itemsSlice";
import { vehicles } from "../../redux/selectors/vehiclesSelector";

//------------
// Optionals
//------------
const Optionals = () => {
  const dispatch = useDispatch()

  const data = useSelector(vehicles);
  const cleanTable = data.data.length === data.filteredData.length;

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
