import React, { FC } from "react";

import styles from "./button.module.scss";
import { IButtonProps } from "./button.props";

export const Button: FC<IButtonProps> = ({ children, ...props }) => (
  <button className={styles.btn} {...props}>
    {children}
  </button>
);
