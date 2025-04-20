import { useToggleWithClickOutside } from "@modules/shared/hooks/useToggleWithClickOutside";
import { useRef, type FC } from "react";
import { FaBell } from "react-icons/fa";
import { NotificationMenu } from "./components/NotificationMenu";

export const Notifications: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const notificationMenuToggle = useToggleWithClickOutside(ref);

  return (
    <div ref={ref}>
      <FaBell
        className="cursor-pointer"
        size={18}
        color="rgba(0, 0, 0, 0.8)"
        onClick={() =>
          notificationMenuToggle.isOpen
            ? notificationMenuToggle.handleClose()
            : notificationMenuToggle.handleOpen()
        }
      />
      {notificationMenuToggle.isOpen && <NotificationMenu />}
    </div>
  );
};
