import React, { useCallback, useEffect, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import { GET_VEHICLES } from "./api/api";
import Search from "./components/optionals/Optionals";
import { Vehicles } from "./types/types";

import { addItems, filterByNation } from "./redux/slices/itemsSlice";
import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "@apollo/client";
import CartItem from "./components/cartItem/cartItem";
import Optionals from "./components/optionals/Optionals";

function App() {
  const dispatch = useDispatch();

  const { loading, error } = useQuery(GET_VEHICLES, {
    onCompleted(data) {
      dispatch(addItems(data.vehicles));
    },
  });

  const data = useSelector((state) => state.main);
  console.log(data)

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
      return data?.filteredData.map((item: Vehicles, index) => (
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
