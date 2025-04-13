import React, { FC } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

export const Layout: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ overflowY: "hidden" }} className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar sidebarOpen={false} />

        {/* Main Content */}
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};
