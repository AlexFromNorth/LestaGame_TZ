import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByType, filterVehicles } from '../../../redux/slices/itemsSlice';

const shipTypes = ["Submarine", "Destroyer", "Cruiser", "Battleship", "Aircraft Carrier"];

function ShipTypeSelector() {
    const dispatch = useDispatch()
  const [selectedShipType, setSelectedShipType] = useState('');

  const handleShipTypeChange = (event) => {
    setSelectedShipType(event.target.value);
    dispatch(filterByType(event.target.value))
    dispatch(filterVehicles())

  };

  return (
    <div>
      <label htmlFor="shipTypeSelect">Выберите тип корабля:</label>
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
      <p>Выбранный тип корабля: {selectedShipType}</p>
    </div>
  );
}

export default ShipTypeSelector;
