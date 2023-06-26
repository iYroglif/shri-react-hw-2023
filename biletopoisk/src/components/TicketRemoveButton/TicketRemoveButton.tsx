"use client";

import styles from "./styles.module.css";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { Modal } from "../Modal/Modal";
import { cartActions } from "@/redux/features/cart";

export const TicketRemoveButton = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAccept = useCallback(() => {
    setIsModalOpen(false);
    dispatch(cartActions.reset(id));
  }, [dispatch, id]);
  const handleDecline = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <div onClick={() => setIsModalOpen(true)} className={styles.root}></div>

      {isModalOpen &&
        createPortal(<Modal onAccept={handleAccept} onDecline={handleDecline} />, document.body)}
    </>
  );
};
