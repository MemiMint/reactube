import { Size } from "../../types/size";

export type ButtonProps = {
  label: string;
  size?: Size;
  disabled?: boolean;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?(): void;
};
