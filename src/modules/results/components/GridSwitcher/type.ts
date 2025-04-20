type GridMode = "horizontal" | "vertical";

export type GridSwitchProps = {
  type: GridMode;
  value: string;
  onClick(type: GridMode): void;
  disabled?: boolean;
};

export type GridModeSwitcherProps = {
  value: string;
  onClick(type: GridMode): void;
  disabled?: boolean;
};
