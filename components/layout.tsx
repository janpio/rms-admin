import React from "react";
import Navbar from "./navbar";
import TopBar from "./topbar";

interface LayoutProps {
  children: React.ReactChild | React.ReactChildren;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex bg-white text-base font-popin">
      <Navbar className="sticky top-0 px-5 w-56" />
      <main className="flex flex-col flex-1 bg-secondary shadow-sm">
        <TopBar />
        <section className="mb-4" style={{ minHeight: "83vh" }}>
          {children}
        </section>
      </main>
    </div>
  );
};
export default Layout;
