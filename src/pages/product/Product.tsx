import {Image, Modal, Pagination, useMantineTheme} from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import styles from "./product.module.scss";
import { IProductProps } from "./product.props";
import {Button, Detail, Input, PageTitle} from "../../components";

const products = [
  { title: "Бройлер кобб 500 / росс 308", id: 1, category: "Цыплята 1-3 дня", images: "https://kvedomosti.ru/wp-content/uploads/2016/12/Kak-kupit-tsyplyat-brojlerov.jpeg"},
  { title: "Бройлер кобб 500", id: 2, category: "Яйцо кобб 500", images: "https://img.promportal.su/foto/good_fotos/465/4651720/prodayu-inkubacionnie-yayca-broylerov-kobb-500-i-ross-308_foto_largest.jpg"},
  { title: "Бройлер", id: 3, category: "Двухнедельные цыплятая", images: "https://ferma.expert/wp-content/uploads/2018/06/boyler.jpg"},
  { title: "Бройлер росс 308", id: 4, category: "Яйцо росс 308", images: "https://img.promportal.su/foto/good_fotos/465/4651720/prodayu-inkubacionnie-yayca-broylerov-kobb-500-i-ross-308_foto_largest.jpg"},
  { title: "Мясо Росс 308 / Кобб 500", id: 5, category: "Мясо", images: "https://rassvetagro.ru/wp-content/uploads/2020/07/kurica-tushka.jpg"},
]
export const Product: FC<IProductProps> = () => {
  const [openModal, setOpenModal] = useState(false);
  const theme = useMantineTheme();

  const handleOpenModalClick = () => setOpenModal(true);

  const paginationStyle = {
      item: {
          "&[data-active]": {
              backgroundColor: "hsl(353, 100%, 65%)",
          },
          marginTop: 20,
          marginBottom: 20,
      },
  }
  return (
    <motion.section initial={{ width: "calc(100vw + 100%)" }} animate={{ width: "100%" }}>
      <Modal
        withCloseButton={false}
        opened={openModal}
        onClose={() => setOpenModal(false)}
        overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size="md">
        <Detail/>
      </Modal>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Магазин</PageTitle>
        </div>
        <div className={styles.filter_wrapper}>
          <div className={styles.input_wrapper}>
            <div className={styles.search_icon_wrapper}>
              <i className="icon-magnifier" />
            </div>
            <Input type="text" placeholder="Поиск" />
          </div>
          <Button>
            <i className="icon-equalizer" />
          </Button>
        </div>
      </div>
      <div className={styles.product_grid}>
        {products.map((product) => (
            <div className={styles.product_card} key={product.id}>
              <div className={styles.product_thumbnail}>
                <Image
                    src={product.images}
                    alt=""
                    className={styles.product_img}
                />
                <div className={styles.product_mask}></div>
              </div>
              <span className={styles.product_category}>{product.category}</span>
              <h3 className={styles.product_title}>{product.title}</h3>
              <a onClick={handleOpenModalClick} className={styles.product_button}>
                <i className="icon-list" />
              </a>
            </div>
        ) )}
      </div>
      <Pagination
        className={styles.pagination}
        size="xs"
        styles={paginationStyle}
        total={100}
      />
    </motion.section>
  );
};
