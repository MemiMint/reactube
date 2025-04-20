import { Button } from "@modules/shared/components/buttons/Button";
import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CreateVideo } from "./components/CreateVideo";
import { UserAvatar } from "./components/UserAvatar";
import { Notifications } from "./components/Notifications";

type UserNavProps = {
  isLoggedIn: boolean;
};

export const UserNav: FC<UserNavProps> = (props) => {
  return props.isLoggedIn ? (
    <div className="flex items-center gap-8">
      <CreateVideo />
      <Notifications />
      <UserAvatar avatar="https://i.pravatar.cc/150" />
    </div>
  ) : (
    <div className="w-28">
      <Button startIcon={<FaUserCircle />} label="Sign In" />
    </div>
  );
};
