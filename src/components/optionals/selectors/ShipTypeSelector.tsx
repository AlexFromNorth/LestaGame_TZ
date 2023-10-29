import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByType, filterVehicles } from '../../../redux/slices/itemsSlice';

const shipTypes = ["Submarine", "Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"];

function ShipTypeSelector({cleanTable}:{cleanTable:boolean}) {
    const dispatch = useDispatch()
  const [selectedShipType, setSelectedShipType] = useState('');

  const handleShipTypeChange:React.ChangeEventHandler<HTMLSelectElement> | undefined = (event) => {
    setSelectedShipType(event.target.value);
    dispatch(filterByType(event.target.value))
    dispatch(filterVehicles())
  };

  useEffect(() => {
    if (cleanTable === true) {
        setSelectedShipType('');
    }
  }, [cleanTable]);

  return (
    <div>
      <label htmlFor="shipTypeSelect">Выберите тип корабля: </label>
      <select
        id="shipTypeSelect"
        value={selectedShipType}
        onChange={handleShipTypeChange}
      >
        <option value="">Выберите тип корабля</option>
        {shipTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ShipTypeSelector;
