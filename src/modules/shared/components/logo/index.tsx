import { FC } from "react";

export const Logo: FC<React.SVGProps<void>> = (props) => (
  <svg
    width={150}
    height={60}
    viewBox="0 0 250 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={10} y={10} width={50} height={40} rx={10} fill="red" />
    <path d="M30 20L45 30L30 40V20Z" fill="white" />
    <text
      x={70}
      y={38}
      className="font-primary "
      fontSize={28}
      fontWeight="bold"
      fill="black"
    >
      {"Reactube"}
    </text>
  </svg>
);
