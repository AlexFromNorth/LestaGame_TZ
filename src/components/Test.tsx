import React from "react";
import { useSelector } from "react-redux";
import { vehicles } from "../api/api";

const vehicle = await vehicles()

const YourComponent = () => {
//   const initialState = useSelector((state) => state.vehicles); // Здесь "vehicles" соответствует имени вашего слайса в хранилище
console.log(vehicle.vehicles)

return (
    <div>
      <h1>Vehicle Data</h1>
      {vehicle.vehicles.map(item=>(
        <div>
            <h4>{item.title}</h4>
            <p>{item.level}</p>
        </div>
      ))}
      
    </div>
  );
};

export default YourComponent;
