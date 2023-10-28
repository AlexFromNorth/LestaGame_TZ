import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './App.module.scss';
import { vehicles } from './api/api';
import Test from './components/test';
import Search from './components/search/Search';
import { Vehicles } from './types/types';

function App() {
  const [vehicleApi, setVehicleApi] = useState<Vehicles | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await vehicles();
        setVehicleApi(data);
      } catch (error) {
        console.error('Error fetching vehicle data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Search />
      <div className={styles.wrapper}>
        {vehicleApi?.map((item:Vehicles, index) => (
          <div className='item' key={index} style={{ backgroundImage: `url(${item.icons.medium})`, backgroundColor: item.nation.color }}>
            <div>
              <img src={item.nation.icons.small} alt="nation" />
              <img src={item.type.icons.default} alt="type" />
              <span>{item.level}</span>
            </div>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
