import React, { FC } from "react";

export const MainContent: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="h-screen flex-1 p-4 overflow-auto bg-white">
      {children}
    </main>
  );
};
