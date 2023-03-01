import React, {FC, useContext, useEffect, useState} from 'react';
import {Badge, Image, ActionIcon} from "@mantine/core"
import {IDetailProps} from "./detail.props";
import {Carousel} from "@mantine/carousel";
import styles from "./detail.module.scss"
import { Button} from "../_ui";
import {IMainContext, MainContext} from "../../context";
import {Notification} from "../Notification/Notification";

export const Detail: FC<IDetailProps> = ({product, onClose, ...props}) => {

    const {basket, setInBasket, setOpenBasket} = useContext<IMainContext>(MainContext)

    const [isOpenNotification, setIsOpenNotification] = useState(false)

    const counter = basket[product.id || "0"]?.counter

    const handleSetProductInBasketClick = () => {
        setIsOpenNotification(true)
        if (setInBasket) {
            setInBasket((prev: any) => {
                if (product.id && prev[product.id]) {
                    return {
                        ...prev,
                        [product.id]: {
                        ...prev[product.id],
                        counter: prev[product.id].counter + 1
                    }}
                } else {
                    return {
                        ...prev,
                        [product.id || "0"]: {
                            counter: 1,
                            product
                    }
                }}
            })
        }
    }

    const handleOpenBasketClick = () => {
        onClose()
        if (setOpenBasket) {
            setOpenBasket(true)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpenNotification(false)
        }, 3000);
        return () => clearTimeout(timer);
    }, [isOpenNotification])
    return (
        <div {...props} className={styles.detail}>
            <Carousel withControls={false} withIndicators slideGap="md" dragFree>
                {product?.images?.all.map((img) => (
                    <Carousel.Slide className={styles.slide} key={img}>
                        <Image src={img}/>
                    </Carousel.Slide>
                ))}
            </Carousel>
            <div className={styles.seller}>
                <div className={styles.title}>Продавец</div>
                <h3>{product?.seller?.name}</h3>
                <div className={styles.contacts}>
                    <p>Телефон:</p> <span>{product?.seller?.phone}</span>
                </div>
                <div className={styles.contacts}>
                <p>Email:</p> <span>{product?.seller?.email}</span>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.title}>Описание</div>
                <h3>{product.title}</h3>
                <p className={styles.description_text}>
                    {product.descriptions}
                </p>
                <div className={styles.basket_wrapper}>
                    <div className={styles.badge}>
                        {product?.tags?.map((tag) => (
                            <Badge key={tag} color="gray">{tag}</Badge>
                        ))}
                    </div>
                    <Button onClick={handleSetProductInBasketClick} variant="secondary" counter={counter}>
                        <i className="icon-basket"/>
                    </Button>
                   <Notification onOpenBasketClick={handleOpenBasketClick} img={product.images?.main} isOpenNotification={isOpenNotification}/>
                </div>
            </div>
            <div  className={styles.detail_footer}>
                <ActionIcon onClick={onClose}>
                    <i className="icon-close"/>
                </ActionIcon>
                <p className={styles.date}>25.02.2023</p>
            </div>
        </div>
    );
};