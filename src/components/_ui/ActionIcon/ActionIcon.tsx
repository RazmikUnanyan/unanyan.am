import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./actionIcon.module.scss";
import { IActionIconProps } from "./actionIcon.props";

export const ActionIcon: FC<IActionIconProps> = ({ children, ...props }) => (
  <Link className={styles.socials_link} {...props}>
    {children}
  </Link>
);
