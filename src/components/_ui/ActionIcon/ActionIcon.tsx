import React, {FC} from 'react';
import {IButtonProps} from "./button.props";
import styles from "./button.module.scss"

export const Button:FC<IButtonProps> = ({children, ...props}) => {
    return (
        <button className={styles.btn} { ...props}>
            {children}
        </button>
    );
};