// redux
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByType, filterVehicles } from '../../../redux/slices/itemsSlice';

// types
import { VehicleItem } from '../../../types/types';



//------------
// ShipTypeSelector
//------------
function ShipTypeSelector({cleanTable, data}:{cleanTable:boolean, data:VehicleItem[]}) {
  const dispatch = useDispatch()
  const [selectedShipType, setSelectedShipType] = useState('');

  const uniqueType = Array.from(new Set(data.map(item => item.type.title)));
  uniqueType.sort((a, b) => a.localeCompare(b));

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
        {uniqueType.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ShipTypeSelector;
