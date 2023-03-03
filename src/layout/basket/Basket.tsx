import { Drawer, ScrollArea, useMantineTheme } from "@mantine/core";
import React, { FC, useContext } from "react";

import styles from "./basket.module.scss";
import { IBasketProps } from "./basket.props";
import { BasketCard, BasketStub, Button, Input } from "../../components";
import { IMainContext, MainContext } from "../../context";

export const Basket: FC<IBasketProps> = ({ onClose, ...props }) => {
  const { basket, setInBasket } = useContext<IMainContext>(MainContext);
  const theme = useMantineTheme();
  const basketItems = Object.values(basket);

  const handleDeleteItemClick = (id?: number | string) => {
    if (setInBasket) {
      const newBasket = { ...basket };
      delete newBasket[id || ""];
      setInBasket(newBasket);
    }
  };

  return (
    <Drawer
      onClose={onClose}
      position="right"
      overlayColor={theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      padding={15}
      {...props}>
      {!basketItems.length && <BasketStub onClose={onClose} />}
      {!!basketItems.length && (
        <div className={styles.basket_wrapper}>
          <ScrollArea h={250} className={styles.basket_orders}>
            {basketItems.map((item) => (
              <BasketCard key={item.product.id} product={item} onDeleteItemClick={handleDeleteItemClick} />
            ))}
          </ScrollArea>
          <div className={styles.basket_footer}>
            <h3 className={styles.basket_info}>
              Наш менеджер свяжется с вами, чтобы уточнить актуальные цены и способ доставки.
            </h3>
            <div className={styles.input_wrapper}>
              <Input placeholder="Name" />
            </div>
            <div className={styles.input_wrapper}>
              <Input placeholder="Phone" />
            </div>
            <div className={styles.input_wrapper}>
              <Input placeholder="Email" />
            </div>
            <div className={styles.button_wrapper}>
              <Button>Заказать</Button>
            </div>
          </div>
        </div>
      )}
    </Drawer>
  );
};
