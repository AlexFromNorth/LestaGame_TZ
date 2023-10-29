import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByLvl, filterVehicles } from "../../../redux/slices/itemsSlice";

function LevelSelector({ cleanTable }:{cleanTable:boolean}) {
  const dispatch = useDispatch();
  const [selectedLevel, setSelectedLevel] = useState(0);

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
        {Array.from({ length: 10 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LevelSelector;
