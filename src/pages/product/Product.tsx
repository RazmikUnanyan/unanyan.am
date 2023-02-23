import {Image, Modal, useMantineTheme} from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import styles from "./product.module.scss";
import { IProductProps } from "./product.props";
import { PageTitle } from "../../components";

export const Product: FC<IProductProps> = () => {
  const [openModal, setOpenModal] = useState(false);
  const theme = useMantineTheme();

  const handleOpenModalClick = () => setOpenModal(true);
  return (
    <motion.section initial={{ width: "calc(100vw + 100%)" }} animate={{ width: "100%" }}>
      <Modal
        withCloseButton={false}
        opened={openModal}
        onClose={() => setOpenModal(false)}
        overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size="xl">
        <h2>Бройлера Кобб 500</h2>
        {/*<img*/}
        {/*  src="https://76.img.avito.st/image/1/1.7SERyba5QcgnYIPNR_rgS_FqR8Kl6kkKoGpDzK1gS8o.EBAbQQKF_8P6wkBrsNqzv4pH0PXPCdOSYgdqj8sP8C4"*/}
        {/*  alt=""*/}
        {/*  className={styles.modal_img}*/}
        {/*/>*/}
      </Modal>
      <PageTitle>Магазин</PageTitle>
      <div className={styles.product_grid}>
        <div className={styles.product_card}>
          <div className={styles.product_thumbnail}>
            <Image
              src="https://kvedomosti.ru/wp-content/uploads/2016/12/Kak-kupit-tsyplyat-brojlerov.jpeg"
              alt=""
              className={styles.product_img}
            />
            <div className={styles.product_mask}></div>
          </div>
          <span className={styles.product_category}>Цыплята 1-3 дня</span>
          <h3 className={styles.product_title}>Бройлер кобб 500 / росс 308</h3>
          <a onClick={handleOpenModalClick} className={styles.product_button}>
            <i className="icon-link" />
          </a>
        </div>
        <div className={styles.product_card}>
          <div className={styles.product_thumbnail}>
            <Image
              src="https://img.promportal.su/foto/good_fotos/465/4651720/prodayu-inkubacionnie-yayca-broylerov-kobb-500-i-ross-308_foto_largest.jpg"
              alt=""
              className={styles.product_img}
            />
            <div className={styles.product_mask}></div>
          </div>
          <span className={styles.product_category}>Яйцо кобб 500</span>
          <h3 className={styles.product_title}>Бройлер кобб 500</h3>
          <a onClick={handleOpenModalClick} className={styles.product_button}>
            <i className="icon-link" />
          </a>
        </div>
        <div className={styles.product_card}>
          <div className={styles.product_thumbnail}>
            <Image
              src="https://rynok-apk.ru/preview/original/pic/96037_F_broilers.jpg"
              alt=""
              className={styles.product_img}
            />
            <div className={styles.product_mask}></div>
          </div>
          <span className={styles.product_category}>Двухнедельные цыплятая</span>
          <h3 className={styles.product_title}>Бройлер кобб 500</h3>
          <a onClick={handleOpenModalClick} className={styles.product_button}>
            <i className="icon-link" />
          </a>
        </div>
        <div className={styles.product_card}>
          <div className={styles.product_thumbnail}>
            <Image
              src="https://76.img.avito.st/image/1/1.7SERyba5QcgnYIPNR_rgS_FqR8Kl6kkKoGpDzK1gS8o.EBAbQQKF_8P6wkBrsNqzv4pH0PXPCdOSYgdqj8sP8C4"
              alt=""
              className={styles.product_img}
            />
            <div className={styles.product_mask}></div>
          </div>
          <span className={styles.product_category}>Яйцо росс 308</span>
          <h3 className={styles.product_title}>Бройлер Росс 308</h3>
          <a onClick={handleOpenModalClick} className={styles.product_button}>
            <i className="icon-link" />
          </a>
        </div>
        <div className={styles.product_card}>
          <div className={styles.product_thumbnail}>
            <Image
              src="https://rassvetagro.ru/wp-content/uploads/2020/07/kurica-tushka.jpg"
              alt=""
              className={styles.product_img}
            />
            <div className={styles.product_mask}></div>
          </div>
          <span className={styles.product_category}>Мясо</span>
          <h3 className={styles.product_title}>Мясо Росс 308 / Кобб 500</h3>
          <a onClick={handleOpenModalClick} className={styles.product_button}>
            <i className="icon-link" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
