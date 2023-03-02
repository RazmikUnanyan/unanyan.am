import { ActionIcon, Image } from "@mantine/core";
import cn from "classnames";
import React, { FC, ReactNode, useState } from "react";

import styles from "./languages.module.scss";
import { ILanguagesProps } from "./languages.props";
import Eng from "../../assets/flugs/icons8-england-circular-48.png";
import Arm from "../../assets/flugs/icons8-армения-48.png";
import Rus from "../../assets/flugs/icons8-российская-федерация-48.png";

export const Languages: FC<ILanguagesProps> = ({ ...props }) => {
  const [openSelectLg, setOpenSelectLg] = useState(false);
  const [currLg, setCurrLg] = useState<"ru" | "am" | "en">("ru");

  const lgs: { [key: string]: ReactNode } = {
    am: <Image src={Arm} />,
    ru: <Image src={Rus} />,
    en: <Image src={Eng} />,
  };

  const handleSelectedLg = (lg: "ru" | "am" | "en") => {
    setCurrLg(lg);
    setOpenSelectLg((prev) => !prev);
  };
  return (
    <div
      className={cn(styles.languages, {
        [styles.languages_open]: openSelectLg,
      })}
      {...props}>
      {openSelectLg && (
        <ActionIcon onClick={() => setOpenSelectLg((prev) => !prev)}>
          <i className="icon-close" />
        </ActionIcon>
      )}
      <ActionIcon onClick={() => setOpenSelectLg((prev) => !prev)}>{lgs[currLg]}</ActionIcon>
      {currLg !== "am" && (
        <ActionIcon onClick={() => handleSelectedLg("am")}>
          <Image className={styles.lg} src={Arm} />
        </ActionIcon>
      )}
      {currLg !== "ru" && (
        <ActionIcon onClick={() => handleSelectedLg("ru")}>
          <Image className={styles.lg} src={Rus} />
        </ActionIcon>
      )}
      {currLg !== "en" && (
        <ActionIcon onClick={() => handleSelectedLg("en")}>
          <Image className={styles.lg} src={Eng} />
        </ActionIcon>
      )}
    </div>
  );
};
