import { useToggleWithClickOutside } from "@modules/shared/hooks/useToggleWithClickOutside";
import { useRef, type FC } from "react";
import { UserMenu } from "./components/UserMenu";

type UserAvatarProps = {
  avatar: string;
};

export const UserAvatar: FC<UserAvatarProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  const userMenuToggle = useToggleWithClickOutside(ref);

  return (
    <div
      ref={ref}
      onClick={() =>
        userMenuToggle.isOpen
          ? userMenuToggle.handleClose()
          : userMenuToggle.handleOpen()
      }
      className="relative w-10 h-10 rounded-full cursor-pointer"
    >
      <img src={props.avatar} className="w-full h-full rounded-full" />
      {userMenuToggle.isOpen && <UserMenu />}
    </div>
  );
};
