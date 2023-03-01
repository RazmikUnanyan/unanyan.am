import React, {FC} from 'react';
import cn from "classnames";
import styles from "./notification.module.scss";
import {INotificationProps} from "./notification.props";
import {Image} from "@mantine/core";

export const Notification:FC<INotificationProps> = ({onOpenBasketClick, img, isOpenNotification}) =>  (
        <div className={cn(styles.detail_notification, {
            [styles.open_notification] : isOpenNotification
        })}>
            <Image   height="3rem"
            width="3rem" className={styles.detail_notification_img} src={img}/>
            Товар добавлен в <span onClick={onOpenBasketClick} className={styles.detail_notification_btn} >корзину</span>
        </div>
    );