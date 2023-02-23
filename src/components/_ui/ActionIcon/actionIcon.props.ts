import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export interface IActionIconProps extends LinkProps {
  children: ReactNode;
}
