import { FC } from "react";
import { SwitcherProps, SwitchType, ContentSwitcherProps } from "./type";

const Switcher: FC<SwitcherProps & { onClick(value: SwitchType): void }> = (
  props,
) => {
  return (
    <div>
      <div
        onClick={() => props.onClick(props.type)}
        className={`cursor-pointer px-2 py-1 text-center text-sm font-semibold rounded-sm ${props.value === props.type ? "bg-black text-white" : "bg-gray-300"}`}
      >
        <p>{props.label}</p>
      </div>
    </div>
  );
};

export const ContentSwitcher: FC<ContentSwitcherProps> = (props) => {
  return (
    <div className="flex items-center gap-2 font-secondary">
      {props.switchers.map((switcher, index) => {
        return (
          <Switcher
            key={index}
            value={props.value}
            label={switcher.label}
            type={switcher.type}
            onClick={(type) => props.onClick(type)}
          />
        );
      })}
    </div>
  );
};
