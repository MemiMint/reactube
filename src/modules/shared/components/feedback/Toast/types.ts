import { ReactNode } from "react";

export type ToastType = "success" | "warning" | "error" | "neutral";
export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export type ToastProps = {
  message: string;
  type?: ToastType;
  icon?: ReactNode;
  position?: ToastPosition;
  duration?: number; // en milisegundos
  closable?: boolean;
};
