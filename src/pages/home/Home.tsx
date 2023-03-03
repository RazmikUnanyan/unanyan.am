import { motion } from "framer-motion";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";

import styles from "./home.module.scss";
import { IHomeProps } from "./home.props";
import { ReactComponent as Avatar } from "../../assets/shapes/chicken1.svg";
import { Button, Shapes, Socials } from "../../components";

export const Home: FC<IHomeProps> = () => {
  const navigate = useNavigate();
  const steps = ["крылья 🐣", 1000, "грудка 🐥", 1000, "курица 🍗", 1000];
  return (
    <motion.section className={styles.home} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.intro}>
        <Avatar className={styles.home_img} />
        <h1 className={styles.home_name}>Куриное мясо</h1>
        <span className={styles.education}>
          Продажа: <Typical steps={steps} loop={Infinity} wrapper="span" />
        </span>
        <Socials />
        <Button onClick={() => navigate("/product")}>В магазин</Button>
      </div>
      <Shapes />
    </motion.section>
  );
};
