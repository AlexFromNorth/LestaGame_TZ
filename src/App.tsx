//other deps
import {  useCallback } from "react";

//styles
import styles from "./App.module.scss";

//apollo
import { GET_VEHICLES } from "./api/api";
import { useQuery } from "@apollo/client";

//redux
import { addItems } from "./redux/slices/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { vehicles } from "./redux/selectors/vehiclesSelector";

//components
import CartItem from "./components/cartItem/CartItem";
import Optionals from "./components/optionals/Optionals";

//types
import { VehicleItem } from "./types/types";

//------------
// App
//------------
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
