"use client";

import styles from "./styles.module.css";
import React, { useContext } from "react";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import { Modal } from "../Modal/Modal";

const TicketIdContext = React.createContext("");

export const TicketCounterCompound = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <TicketIdContext.Provider value={id}>
      <div className={styles.root}>{children}</div>
    </TicketIdContext.Provider>
  );
};

TicketCounterCompound.DecrementButton = function DecrementButton() {
  const id = useContext(TicketIdContext);
  const ticketsAmount = useSelector((state) => selectProductAmount(state, id));
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(cartActions.decrement(id))}
      className={styles.button}
      disabled={ticketsAmount === 0}
    >
      <div className={styles.minus}></div>
    </button>
  );
};

TicketCounterCompound.DecrementButtonWithModal = function DecrementButtonWithModal() {
  const id = useContext(TicketIdContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ticketsAmount = useSelector((state) => selectProductAmount(state, id));
  const dispatch = useDispatch();

  const handleDecrement = useCallback(() => {
    if (ticketsAmount === 1) {
      setIsModalOpen(true);
    } else {
      dispatch(cartActions.decrement(id));
    }
  }, [dispatch, id, ticketsAmount]);

  return (
    <>
      <button onClick={handleDecrement} className={styles.button} disabled={ticketsAmount === 0}>
        <div className={styles.minus}></div>
      </button>
      {isModalOpen &&
        createPortal(
          <Modal
            onAccept={() => {
              setIsModalOpen(false);
              dispatch(cartActions.decrement(id));
            }}
            onDecline={() => {
              setIsModalOpen(false);
            }}
          />,
          document.body
        )}
    </>
  );
};

TicketCounterCompound.Count = function Count() {
  const id = useContext(TicketIdContext);
  const ticketsAmount = useSelector((state) => selectProductAmount(state, id));

  return <span className={styles.count}>{ticketsAmount}</span>;
};

TicketCounterCompound.IncrementButton = function IncrementButton() {
  const id = useContext(TicketIdContext);
  const ticketsAmount = useSelector((state) => selectProductAmount(state, id));
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(cartActions.increment(id))}
      className={styles.button}
      disabled={ticketsAmount === 30}
    >
      <div className={styles.plus}></div>
    </button>
  );
};
