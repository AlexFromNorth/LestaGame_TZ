import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { vehicles } from "../api/api";
import { Vehicles } from "../types/types";

const vehicle:Vehicles = await vehicles()

const YourComponent = () => {

useEffect(()=>{
    console.log(vehicle)

},[])

return (
    <div>
      <h1>Vehicle Data</h1>
      {vehicle.vehicles.map((item, index)=>(
        <div key={index}>
            <h4>{item.title}</h4>
            <p>{item.level}</p>
        </div>
      ))}
      
    </div>
  );
};

export default YourComponent;
