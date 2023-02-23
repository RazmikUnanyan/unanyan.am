import React, { FC } from "react";

import styles from "./socials.module.scss";
import { ISocialsProps } from "./socials.props";
import { ActionIcon } from "../_ui";

export const Socials: FC<ISocialsProps> = ({ ...props }) => (
  <div className={styles.socials} {...props}>
    <ActionIcon to="#" target="_blank">
      <i className="icon-social-instagram"></i>
    </ActionIcon>
    <ActionIcon to="#" target="_blank">
      <i className="icon-social-youtube"></i>
    </ActionIcon>
    <ActionIcon to="#" target="_blank">
      <i className="icon-social-twitter"></i>
    </ActionIcon>
    <ActionIcon to="#" target="_blank">
      <i className="icon-social-facebook"></i>
    </ActionIcon>
  </div>
);
