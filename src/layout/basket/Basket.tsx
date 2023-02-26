import React, {FC, useContext} from "react";
import styles from "./basket.module.scss"

import {IBasketProps} from "./basket.props";
import {Drawer, useMantineTheme} from "@mantine/core";
import {BasketCard, BasketStub} from "../../components";
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
            withCloseButton={false}
            onClose={onClose}
            position="right"
            overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            padding={15}
            {...props}
        >
            {!basketItems.length && <BasketStub onClose={onClose}/>}
            <div className={styles.basket_card_wrapper}>
                {basketItems.map((item, index) => (
                    <BasketCard product={item} onDeleteItemClick={handleDeleteItemClick}/>
                ))}
            </div>
        </Drawer>
    );
};
