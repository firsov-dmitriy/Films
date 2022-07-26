import React, { FC } from "react";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
