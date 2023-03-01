import React, {FC, useContext} from "react";
import styles from "./basket.module.scss"

import {IBasketProps} from "./basket.props";
import {Drawer, Image, useMantineTheme} from "@mantine/core";
import { BasketStub, Button, Input} from "../../components";
import {IMainContext, MainContext} from "../../context";

export const Basket: FC<IBasketProps> = ({onClose, ...props}) => {
    const {basket, setInBasket} = useContext<IMainContext>(MainContext)
    const theme = useMantineTheme();
    const basketItems = Object.values(basket)

    const handleDeleteItemClick = (id?: number | string) => {
        if (setInBasket) {
            const newBasket = {...basket}
            delete newBasket[id || ""]
            setInBasket(newBasket)
        }
    }
    return (
        <Drawer
            onClose={onClose}
            position="right"
            overlayColor={theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            padding={15}
            {...props}
        >
            {!basketItems.length && <BasketStub onClose={onClose}/>}
            {!!basketItems.length && (
                <div className={styles.basket_wrapper}>
                    <div className={styles.basket_orders}>
                        <ul className={styles.basket_orders}>
                            {basketItems.map((item, index) => (
                                <li key={item.product.id}>
                                    <div className={styles.mask}/>
                                    {item.product.title}
                                    <span className={styles.counter}>
                                : {item.counter} шт.
                                </span>
                                    <span className={styles.basket_delete} onClick={() => handleDeleteItemClick(item.product.id)}>
                                        Удалить
                                     </span>
                                    <Image className={styles.img} src={item.product.images?.main}/>
                                    <div className={styles.counter_active}>
                                        {item.counter === 1 ? <i className="icon-close"/> : <i className="icon-minus"/>}
                                        {item.counter}
                                        <i className="icon-plus"/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.basket_footer}>
                        <h3 className={styles.basket_info}>
                            Наш менеджер свяжется с вами, чтобы уточнить актуальные цены и способ доставки.
                        </h3>
                        <div className={styles.input_wrapper}>
                            <Input placeholder="Name"/>
                        </div>
                        <div className={styles.input_wrapper}>
                            <Input placeholder="Phone"/>
                        </div>
                        <div className={styles.input_wrapper}>
                            <Input placeholder="Email"/>
                        </div>
                        <Button>Заказать</Button>
                    </div>
                </div>
            )}
        </Drawer>
    );
};
