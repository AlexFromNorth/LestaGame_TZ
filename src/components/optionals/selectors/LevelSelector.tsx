// redux
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByLvl, filterVehicles } from "../../../redux/slices/itemsSlice";

// types
import { VehicleItem } from "../../../types/types";



//------------
// LevelSelector
//------------
function LevelSelector({ cleanTable, data }:{cleanTable:boolean, data:VehicleItem[]}) {
  const dispatch = useDispatch();
  const [selectedLevel, setSelectedLevel] = useState(0);

  const uniqueLevels = Array.from(new Set(data.map(item => item.level)));
  uniqueLevels.sort((a, b) => a - b);

  const handleLevelChange:React.ChangeEventHandler<HTMLSelectElement> | undefined = (event) => {
    setSelectedLevel(+event.target.value);
    dispatch(filterByLvl(event.target.value));
    dispatch(filterVehicles());
  };

  useEffect(() => {
    if (cleanTable === true) {
      setSelectedLevel(0);
    }
  }, [cleanTable]);

  return (
    <div>
      <label htmlFor="levelSelect">Выберите уровень:</label>
      <select
        id="levelSelect"
        value={selectedLevel}
        onChange={handleLevelChange}
      >
        <option value="">Выберите уровень</option>
          {uniqueLevels.map((item, index) => (
        <option key={index} value={item}>
      {item}
    </option>
  ))}
      </select>
    </div>
  );
}

export default LevelSelector;
