import { ActionIcon } from "@mantine/core";
import cn from "classnames";
import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.scss";
import { ISidebarProps } from "./sidebar.props";
import Logo from "../../assets/avatar.png";

export const Sidebar: FC<ISidebarProps> = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const active = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "hsl(43, 100%, 68%)" : "hsl(244, 24%, 26%)",
  });
  return (
    <>
      <aside
        className={cn(styles.aside, {
          [styles.aside_mobile_open]: openMenu,
        })}>
        <a href="#" className={styles.logo}>
          <img src={Logo} alt="logo" />
        </a>

        <nav className={styles.nav}>
          <div className={styles.nav_menu}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item}>
                <NavLink to="/unanyan.am" className={styles.nav_link} style={active}>
                  <i className="icon-home"></i>
                </NavLink>
              </li>

              <li className={styles.nav_item}>
                <NavLink to="/product" className={styles.nav_link} style={active}>
                  <i className="icon-fire"></i>
                </NavLink>
              </li>

              <li className={styles.nav_item}>
                <NavLink to="/contact" className={styles.nav_link} style={active}>
                  <i className="icon-envelope"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.nav_footer}>
          <span className={styles.copyright}>&copy; 2023-2024.</span>
        </div>
      </aside>
      <ActionIcon
        className={cn(styles.nav_toggle, {
          [styles.nav_toggle_open]: openMenu,
        })}
        onClick={() => setOpenMenu((prev) => !prev)}>
        <i className={openMenu ? "icon-close" : "icon-menu"} />
      </ActionIcon>
    </>
  );
};
