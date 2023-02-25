import React, { FC } from "react";
import cn from "classnames"

import styles from "./button.module.scss";
import { IButtonProps } from "./button.props";

export const Button: FC<IButtonProps> = ({ counter, withCounter, variant, children, ...props }) => (
  <button className={cn({
  [styles.primary]: variant === "primary",
  [styles.secondary]: variant === "secondary",
  })} {...props}>
    {withCounter && <div className={styles.counter}>2</div>}
    {children}
  </button>
);

Button.defaultProps = {
  variant: "primary",
  withCounter: false,
}