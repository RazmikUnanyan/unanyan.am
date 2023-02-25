import React, { FC } from "react";

import { IBasketProps } from "./basket.props";
import {Drawer, useMantineTheme} from "@mantine/core";
import {BasketStub} from "../../components";

export const Basket: FC<IBasketProps> = ( {onClose, ...props}) => {
  const theme = useMantineTheme();
  return (
      <Drawer
          onClose={onClose}
          position="right"
          overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
          overlayOpacity={0.55}
          overlayBlur={3}
          {...props}
      >
          <BasketStub onClose={onClose}/>
      </Drawer>
  );
};
