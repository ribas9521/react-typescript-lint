import { CssProperties, StyledViewProps } from "../index";

export type BoxStyledProps = CssProperties & StyledViewProps & {
  onClick?: () => void;
  id?: string;
  css?: any;
};
