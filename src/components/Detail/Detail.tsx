import React, {FC} from 'react';
import {Badge, Image} from "@mantine/core"
import {IDetailProps} from "./detail.props";
import {Carousel} from "@mantine/carousel";
import styles from "./detail.module.scss"
import {Button} from "../_ui";

export const Detail: FC<IDetailProps> = ({...props}) => {
    return (
        <div {...props} className={styles.detail}>
            <Carousel withControls={false} withIndicators slideGap="md" dragFree>
                <Carousel.Slide className={styles.slide}>
                    <Image src="https://agrostory.com/upload/iblock/eb3/eb39e9ef6fd811597c0dcebfbbb7e071.jpg"/>
                </Carousel.Slide>
                <Carousel.Slide className={styles.slide}>
                    <Image src="https://kletkamaster.ru/upload/iblock/0b3/0b3217b3a4b4bdda1b2231a9d99fa6f9.jpg"/>
                </Carousel.Slide>
                <Carousel.Slide className={styles.slide}>
                    <Image src="https://agrostory.com/upload/iblock/eb3/eb39e9ef6fd811597c0dcebfbbb7e071.jpg"/>
                </Carousel.Slide>
            </Carousel>
            <div className={styles.seller}>
                <div className={styles.title}>Продавец</div>
                <h3>Размик</h3>
                <div className={styles.contacts}>
                    <p>Телефон:</p> <span>+7777999000</span>
                </div>
                <div className={styles.contacts}>
                <p>Email:</p> <span>unanyan.razmik@mail.ru</span>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.title}>Описание</div>
                <h3>Кобб 500</h3>
                <p className={styles.description_text}>
                    Кобб 500 — кросс бройлерного направления. Впервые вывели таких кур в Чехии, и в дальнейшем кроссы
                    этой разновидности приобрели популярность в самых разных странах, в том числе на просторах СНГ.
                </p>
                <div className={styles.basket_wrapper}>
                    <div className={styles.badge}>
                        <Badge color="gray">яйцо</Badge>
                        <Badge color="gray">кобб 500</Badge>
                    </div>
                    <Button variant="secondary" counter={4} withCounter>
                        <i className="icon-basket"/>
                    </Button>
                </div>
            </div>
            <div  className={styles.detail_footer}>
                <p className={styles.date}>25.03.2023</p>
            </div>
        </div>
    );
};