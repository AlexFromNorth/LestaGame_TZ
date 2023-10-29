import React, {  useCallback } from "react";


import styles from "./App.module.scss";
import { GET_VEHICLES } from "./api/api";
import { VehicleItem } from "./types/types";

import { addItems } from "./redux/slices/itemsSlice";
import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "@apollo/client";
import CartItem from "./components/cartItem/CartItem";
import Optionals from "./components/optionals/Optionals";
import { vehicles } from "./redux/selectors/vehiclesSelector";

function App() {
  const dispatch = useDispatch();

  const { loading, error } = useQuery(GET_VEHICLES, {
    onCompleted(data) {
      dispatch(addItems(data.vehicles as VehicleItem[]));
    },
  });

  const data = useSelector(vehicles);

  const renderContent = useCallback(() => {
    if (error) {
      return (
        <div className={styles.container}>
          <span>ОШИБКА!!!</span>
        </div>
      );
    } else if (!data?.data.length) {
      return (
        <div className={styles.container}>
          <span>ДАННЫХ НЕТ</span>
        </div>
      );
    } else {
      return data?.filteredData.map((item: VehicleItem, index) => (
        <CartItem key={index} item={item}  />
      ));
    }
  }, [error, data]);

  if (loading) {
    return (
      <div className={styles.container}>
        <span>Ждите</span>
      </div>
    );
  }

  return (
    <div className={`${styles.container} `}>
      <Optionals />
      <div className={styles.wrapper}>{renderContent()}</div>
    </div>
  );
}

export default App;
