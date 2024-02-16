import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import type { Button } from "../../types/buttonTypes";
import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "../../constants/buttonConstants";

const { OVAL, RECTANGLE } = BUTTON_SHAPES;
const { LARGE, MEDIUM, NARROW, SMALL } = BUTTON_SIZES;
const { DEFAULT, DESTRUCTIVE_OUTLINE, DESTRUCTIVE_PRIMARY, OUTLINE, PRIMARY } =
  BUTTON_VARIANTS;

import classes from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & Button;

const buttonShapeClasses = {
  [OVAL]: classes.buttonShapeOval,
  [RECTANGLE]: classes.buttonShapeRectangle,
};

const buttonSizeClasses = {
  [LARGE]: classes.buttonSizeLarge,
  [MEDIUM]: classes.buttonSizeMedium,
  [SMALL]: classes.buttonSizeSmall,
  [NARROW]: classes.buttonSizeNarrow,
};

const buttonVariantClasses = {
  [PRIMARY]: classes.buttonVariantPrimary,
  [DEFAULT]: classes.buttonVariantDefault,
  [OUTLINE]: classes.buttonVariantOutline,
  [DESTRUCTIVE_PRIMARY]: classes.buttonVariantDestructivePrimary,
  [DESTRUCTIVE_OUTLINE]: classes.buttonVariantDestructiveOutline,
};

export default function Button(props: Props) {
  const {
    children,
    className,
    shape = OVAL,
    size = LARGE,
    variant = DEFAULT,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={clsx(
        classes.button,
        buttonShapeClasses[shape],
        buttonSizeClasses[size],
        buttonVariantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
