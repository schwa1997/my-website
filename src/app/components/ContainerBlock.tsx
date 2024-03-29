import React, { FC, ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface ContainerBlockProps {
  children: ReactNode;
}

export const ContainerBlock: FC<ContainerBlockProps> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
