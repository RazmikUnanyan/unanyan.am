import React, {FC} from 'react';
import {IPageTitleProps} from "./PageTitle.props";
import styles from "./PageTitle.module.scss"

export const PageTitle: FC<IPageTitleProps> = ({children}) => (
    <div className={styles.title}>
        {children}
    </div>
);