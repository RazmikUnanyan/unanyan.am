import React, {FC} from 'react';
import styles from "./basketCard.module.scss";
import {IBasketCardProps} from "./basketCard.props";
import {Image} from "@mantine/core";

export const BasketCard: FC<IBasketCardProps> = ({onDeleteItemClick, product, ...props}) => {

    return (
        <div className={styles.basket_card} {...props}>
            <div className={styles.mask}/>
            <div className={styles.basket_detail}>
                <Image src={product.product.images?.main}/>
                <h3 className={styles.title}>{product.product.title}</h3>
                <span className={styles.basket_delete} onClick={() => onDeleteItemClick(product.product.id)}>
                    Удалить
                </span>
            </div>
            <div className={styles.basket_counter}>
                {product.counter === 1 ? <i className="icon-close"/> : <i className="icon-minus"/>}
                {product.counter}
                <i className="icon-plus"/>
            </div>
        </div>
    );
};