"use client";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectProductsAmount } from "@/redux/features/cart/selector";
import { CartState } from "@/redux/features/cart/CartState";

export const Cart = () => {
  const ticketsAmount = useSelector((state: { cart: CartState }) => selectProductsAmount(state));

  return (
    <div className={styles.root}>
      <div className={styles.count}>{ticketsAmount}</div>
      <div className={styles.cart}></div>
    </div>
  );
};
