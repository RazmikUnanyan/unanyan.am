import { ActionIcon, Image } from "@mantine/core";
import React, { FC, useContext } from "react";

import styles from "./basketCard.module.scss";
import { IBasketCardProps } from "./basketCard.props";
import { IMainContext, MainContext } from "../../context";

export const BasketCard: FC<IBasketCardProps> = ({ onDeleteItemClick, product, ...props }) => {
  const { setInBasket, basket } = useContext<IMainContext>(MainContext);

  const handleIncreaseClick = () => {
    if (setInBasket && product.product.id) {
      setInBasket((prev) => ({
        ...prev,
        [product.product.id]: {
          ...prev[product.product.id],
          counter: prev[product.product.id].counter + 1,
        },
      }));
    }
  };

  const handleDecreaseClick = () => {
    if (setInBasket && product.product.id) {
      setInBasket((prev) => ({
        ...prev,
        [product.product.id]: {
          ...prev[product.product.id],
          counter: prev[product.product.id].counter - 1,
        },
      }));
    }
  };

  const handleDeleteItemClick = () => {
    if (setInBasket) {
      const newBasket = { ...basket };
      delete newBasket[product.product.id || ""];
      setInBasket(newBasket);
    }
  };

  return (
    <div className={styles.basket_card} {...props}>
      <div className={styles.mask} />
      <div className={styles.basket_detail}>
        <Image src={product.product.images?.main} />
        <h3 className={styles.title}>{product.product.title}</h3>
        <span className={styles.basket_delete} onClick={() => onDeleteItemClick(product.product.id)}>
          Удалить
        </span>
      </div>
      <div className={styles.basket_counter}>
        {product.counter === 1 ? (
          <ActionIcon onClick={handleDeleteItemClick}>
            <i color="red" className="icon-close" />
          </ActionIcon>
        ) : (
          <ActionIcon onClick={handleDecreaseClick}>
            <i className="icon-minus" />
          </ActionIcon>
        )}
        {product.counter}
        <ActionIcon onClick={handleIncreaseClick}>
          <i className="icon-plus" />
        </ActionIcon>
      </div>
    </div>
  );
};
