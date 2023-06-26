"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { createPortal } from "react-dom";
import React, { useState, useRef, useEffect, useContext, useCallback } from "react";

const IsOpenContext = React.createContext(false);
const IsOpenSwitcherContext = React.createContext((isOpen: boolean) => {});
const RefContext = React.createContext<React.RefObject<HTMLDivElement> | null>(null);
const ToggleContext = React.createContext(() => {});
const InputValueContext = React.createContext("");
const OnChangeContext = React.createContext((value: string) => {});

export const Dropdown = ({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleToggle = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen, ref]);

  return (
    <IsOpenContext.Provider value={isOpen}>
      <IsOpenSwitcherContext.Provider value={setIsOpen}>
        <ToggleContext.Provider value={handleToggle}>
          <RefContext.Provider value={ref}>
            <InputValueContext.Provider value={value}>
              <OnChangeContext.Provider value={onChange}>
                <div ref={ref} className={styles.root}>
                  {children}
                </div>
              </OnChangeContext.Provider>
            </InputValueContext.Provider>
          </RefContext.Provider>
        </ToggleContext.Provider>
      </IsOpenSwitcherContext.Provider>
    </IsOpenContext.Provider>
  );
};

Dropdown.Select = function Select({ placeholder }: { placeholder: string }) {
  const value = useContext(InputValueContext);
  const handleToggle = useContext(ToggleContext);
  const isOpen = useContext(IsOpenContext);

  return (
    <div onClick={handleToggle} className={classNames(styles.input, { [styles.open]: isOpen })}>
      <div className={classNames(styles.text, { [styles.textOpen]: isOpen || value !== "" })}>
        {value !== "" ? value : placeholder}
      </div>
      <div className={classNames(styles.icon, { [styles.iconOpen]: isOpen })}></div>
    </div>
  );
};

Dropdown.Options = function Options({ children }: { children: React.ReactNode }) {
  const isOpen = useContext(IsOpenContext);
  const ref = useContext(RefContext);

  if (!isOpen || !ref?.current) {
    return null;
  }

  return createPortal(
    <div className={styles.menu}>
      <ul className={styles.buttons}>{children}</ul>
    </div>,
    ref.current
  );
};

Dropdown.Item = function Item({ value, children }: { value: string; children: React.ReactNode }) {
  const onChange = useContext(OnChangeContext);
  const handleToggle = useContext(ToggleContext);

  return (
    <li
      onClick={() => {
        onChange(value);
        handleToggle();
      }}
      className={styles.item}
    >
      {children}
    </li>
  );
};
