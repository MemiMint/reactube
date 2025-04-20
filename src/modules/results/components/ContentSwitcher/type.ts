export type SwitchType = "all" | "accounts" | "videos";

export type SwitcherProps = {
  type: SwitchType;
  value: string;
  label: string;
};

export type ContentSwitcherProps = {
  switchers: { label: string; type: SwitchType }[];
  value: string;
  onClick(type: SwitchType): void;
};
