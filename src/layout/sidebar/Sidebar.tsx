import React, { FC } from "react";

import styles from "./sidebar.module.scss";
import { ISidebarProps } from "./sidebar.props";
import Logo from "../../assets/avatar.png";
import { ActionIcon } from "../../components";

export const Sidebar: FC<ISidebarProps> = () => {
  return (
    <aside className={styles.aside}>
      <a href="#" className={styles.logo}>
        <img src={Logo} alt="logo" />
      </a>

      <nav className={styles.nav}>
        <div className={styles.nav_menu}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <ActionIcon to="/" className={styles.nav_link}>
                <i className="icon-home"></i>
              </ActionIcon>
            </li>

            <li className={styles.nav_item}>
              <ActionIcon to="/product" className={styles.nav_link}>
                <i className="icon-fire"></i>
              </ActionIcon>
            </li>

            <li className={styles.nav_item}>
              <ActionIcon to="/contact" className={styles.nav_link}>
                <i className="icon-envelope"></i>
              </ActionIcon>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.nav_footer}>
        <span className={styles.copyright}>&copy; 2023-2024.</span>
      </div>
    </aside>
  );
};
