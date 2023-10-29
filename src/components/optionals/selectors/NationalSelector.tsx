// redux
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByNation, filterVehicles } from '../../../redux/slices/itemsSlice';

// types
import { VehicleItem } from '../../../types/types';



//------------
// NationalSelector
//------------
function NationalSelector({cleanTable, data}:{cleanTable:boolean, data:VehicleItem[]}) {
  const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState('');

  const uniqueNations = Array.from(new Set(data.map(item => item.nation.title)));
  uniqueNations.sort((a, b) => a.localeCompare(b));

  const handleCountryChange:React.ChangeEventHandler<HTMLSelectElement> | undefined = (event) => {
    setSelectedCountry(event.target.value);
    dispatch(filterByNation(event.target.value))
    dispatch(filterVehicles())
  };

  useEffect(() => {
    if (cleanTable === true) {
      setSelectedCountry('');
    }
  }, [cleanTable]);

  return (
    <div>
      <label htmlFor="countrySelect">Выберите страну:</label>
      <select
        id="countrySelect"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Выберите страну</option>
        {uniqueNations.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default NationalSelector;
