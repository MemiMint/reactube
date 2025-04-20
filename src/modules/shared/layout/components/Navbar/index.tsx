import { FC, useState } from "react";
import { Logo } from "@modules/shared/components/Logo";
import { FiMenu } from "react-icons/fi";
import { UserNav } from "./components/UserNav";
import { SearchBar } from "./components/SearchBar";

export const Navbar: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <nav className="cursor-pointer h-20 bg-white px-4 flex items-center justify-between sticky top-0 z-10">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden text-xl mx-1"
      >
        <FiMenu />
      </button>
      <div className="md:hidden lg:block">
        <Logo />
      </div>
      <SearchBar />
      <UserNav isLoggedIn={false} />
    </nav>
  );
};
