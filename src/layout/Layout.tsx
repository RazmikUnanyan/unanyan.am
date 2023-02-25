import React, {FC, FunctionComponent, useState} from "react";

import styles from "./layout.module.scss";
import { ILayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/Sidebar";
import {Button, Languages} from "../components";
import {Basket} from "./basket/Basket";

export const Layout: FC<ILayoutProps> = ({ children, ...props }) => {
    const [openBasket, setOpenBasket] = useState(false)
    return (
    <div {...props}>
        <Sidebar/>
        <main className={styles.main}>
            <Languages/>
            <Basket opened={openBasket} onClose={() => setOpenBasket(false)}/>
            <div className={styles.basket}>
                <Button onClick={() => setOpenBasket(true)} variant="secondary" counter={4} withCounter>
                    <i className="icon-basket"/>
                </Button>
            </div>
            <div className={styles.container}>{children}</div>
        </main>
    </div>
)};

export const withLayout =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T) =>
    (
      <Layout>
        <Component {...props} />
      </Layout>
    );
