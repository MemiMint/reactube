import { FC, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { ToastProps } from "./types";
import { getPositionsClasses } from "./utils/get-position-classes";
import { getTypeClasses } from "./utils/get-type";

export const Toast: FC<ToastProps> = ({
  message,
  type = "neutral",
  icon,
  position = "bottom-right",
  duration = 3000,
  closable = true,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hideToast = () => setIsVisible(false);

  useEffect(() => {
    const timer = setTimeout(hideToast, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed z-50 flex items-center p-4 rounded-lg shadow-lg min-w-[250px] max-w-xs transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTypeClasses(type)} ${getPositionsClasses(position)}`}
    >
      {icon && <div className="mr-3">{icon}</div>}
      <span className="flex-1 font-primary">{message}</span>
      {closable && (
        <button
          onClick={hideToast}
          className="ml-2 text-white hover:text-gray-300"
        >
          <MdClose size={18} />
        </button>
      )}
    </div>
  );
};
