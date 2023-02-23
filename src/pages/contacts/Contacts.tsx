import cn from "classnames";
import { motion } from "framer-motion";
import React, { FC } from "react";

import styles from "./contacts.module.scss";
import { IContactsProps } from "./contacts.props";
import { Button, Input, PageTitle, Shapes, Textarea } from "../../components";

export const Contacts: FC<IContactsProps> = () => {
  return (
    <motion.section className={styles.contacts_wrapper} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageTitle>Контакты</PageTitle>
      <div className={styles.contacts}>
        <div className={styles.contacts_info}>
          <h3 className={styles.contacts_title}>Остались Вопросы?</h3>
          <p className={styles.contacts_Detail}>Наш менеджер свяжется с вами.</p>
        </div>
        <form action="" className={styles.contacts_form}>
          <div className={styles.contacts_form_group}>
            <div className={styles.contacts_form_input_wrapper}>
              <Input type="text" placeholder="Введите ваш имя" />
            </div>
            <div className={styles.contacts_form_input_wrapper}>
              <Input type="text" placeholder="Введите ваш email" />
            </div>
          </div>
          <div className={styles.contacts_form_input_wrapper}>
            <Input type="text" placeholder="Тема" />
          </div>
          <div className={cn(styles.contacts_form_input_wrapper, styles.contacts_form_input_area)}>
            <Textarea placeholder="Напишите ваш текст" name="" id="" rows={30} cols={10}></Textarea>
          </div>
          <Button>Отправить</Button>
        </form>
      </div>
      <Shapes />
    </motion.section>
  );
};
