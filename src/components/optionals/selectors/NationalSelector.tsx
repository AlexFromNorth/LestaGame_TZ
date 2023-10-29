import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByNation, filterVehicles } from '../../../redux/slices/itemsSlice';

const countries = [
  'Japan', 'U.S.A.', 'U.S.S.R.', 'Germany', 'U.K.', 'France', 'Pan-Asia',
  'Italy', 'Commonwealth', 'Pan-America', 'Europe', 'The Netherlands', 'Spain'
];

function NationalSelector() {
  const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    dispatch(filterByNation(event.target.value))
    dispatch(filterVehicles())

  };

  return (
    <div>
      <label htmlFor="countrySelect">Выберите страну:</label>
      <select
        id="countrySelect"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Выберите страну</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <p>Выбранная страна: {selectedCountry}</p>
    </div>
  );
}

export default NationalSelector;
