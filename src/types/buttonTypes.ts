import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "../constants/buttonConstants";
import { ObjectValues } from "./common";

export type ButtonShape = ObjectValues<typeof BUTTON_SHAPES>;

export type ButtonSize = ObjectValues<typeof BUTTON_SIZES>;

export type ButtonVariant = ObjectValues<typeof BUTTON_VARIANTS>;

export type Button = {
  shape?: ButtonShape;
  size?: ButtonSize;
  variant?: ButtonVariant;
};
