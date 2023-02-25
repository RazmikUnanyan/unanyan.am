import React from 'react';
import {ReactComponent as EmptyIcon} from "../../assets/empty.svg";
import styles from "./BasketStub.module.scss";
import {Button} from "../_ui";
import {useNavigate} from "react-router-dom";

export const BasketStub = ({onClose}: {onClose: () => void}) => {
    const navigate = useNavigate()
    return (
        <div className={styles.basket_stub}>
            <EmptyIcon className={styles.basket_stub_icon}/>
            Ваша корзина пуста
            <Button onClick={() => {
                onClose()
                navigate("/product")
            }}>В магазин</Button>
        </div>
    );
};