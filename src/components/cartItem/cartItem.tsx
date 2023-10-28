import React from "react";
import styles from "./cartItem.module.scss";

const CartItem = ({ item }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${item.icons.medium})`,
        backgroundColor: item.nation.color,
      }}
    >
      <div className={styles.item}>
        <div className={styles.info}>
          <img src={item.nation.icons.small} alt="nation" />
          <img src={item.type.icons.default} alt="type" />

          <span>{item.level}</span>
        </div>

        <p>{item.title}</p>
      </div>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};

export default CartItem;
