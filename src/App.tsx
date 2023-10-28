import React, { useCallback, useEffect, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import { GET_VEHICLES } from "./api/api";
import Search from "./components/search/Search";
import { Vehicles } from "./types/types";

import { addItems, filterByNation } from "./redux/slices/itemsSlice";
import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "@apollo/client";

function App() {
  const dispatch = useDispatch();

  const { loading, error } = useQuery(GET_VEHICLES, {
    onCompleted(data) {
      dispatch(addItems(data.vehicles));
    },
  });

  const data = useSelector((state) => state.main.data);

  // useEffect(()=>{
  //   if(loading===false){
  //     dispatch
  //   }

  // },[loading])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const data = await vehicles();

  //       // dispatch(addItems(data));
  //     } catch (error) {
  //       console.error("Error fetching vehicle data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const clickHandler = (action) => {
    dispatch(filterByNation(action));
  };

  const renderContent = useCallback(() => {
    if (error) {
      return (
        <div className="wrapper">
          <span>ОШИБКА!!!</span>
        </div>
      );
    } else if (!data?.length) {
      return (
        <div className="wrapper">
          <span>ДАННЫХ НЕТ, БРАТИШКА</span>
        </div>
      );
    } else {
      return data?.map((item: Vehicles, index: number) => (
        <div
          className="item"
          key={index}
          style={{
            backgroundImage: `url(${item.icons.medium})`,
            backgroundColor: item.nation.color,
          }}
        >
          <button
            onClick={() => {
              clickHandler("Japan");
            }}
          >
            {index}
          </button>
          <div>
            <img src={item.nation.icons.small} alt="nation" />
            <img src={item.type.icons.default} alt="type" />

            <span>{item.level}</span>
          </div>

          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ));
    }
  }, [error, data]);

  if (loading) {
    return (
      <div className="wrapper">
        <span>ждите</span>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Search />
      <div className={styles.wrapper}>{renderContent()}</div>
    </div>
  );
}

export default App;
