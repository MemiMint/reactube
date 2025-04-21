import { FC } from "react";
import { GridModeSwitcherProps, GridSwitchProps } from "./type";
import { MdGridView } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";

const GridSwitch: FC<GridSwitchProps> = (props) => {
  const selectedClassname: string =
    props.value === props.type ? "bg-gray-300" : "bg-gray-200";
  const disabledClassname: string = props.disabled
    ? "bg-gray-100 opacity-50"
    : "";

  const roundCorner =
    props.type === "horizontal" ? "rounded-l-sm" : "rounded-r-sm";

  return (
    <div
      onClick={() => !props.disabled && props.onClick(props.type)}
      className={`p-2 cursor-pointer ${roundCorner} ${props.disabled ? "" : selectedClassname} ${disabledClassname}`}
    >
      {props.type == "horizontal" ? (
        <MdGridView size={20} />
      ) : (
        <GoListUnordered size={20} />
      )}
    </div>
  );
};

export const GridModeSwitcher: FC<GridModeSwitcherProps> = (props) => {
  return (
    <div className="flex items-center gap">
      <GridSwitch
        type="horizontal"
        onClick={(type) => props.onClick(type)}
        value={props.value}
        disabled={props.disabled}
      />
      <GridSwitch
        type="vertical"
        onClick={(type) => props.onClick(type)}
        value={props.value}
        disabled={props.disabled}
      />
    </div>
  );
};
