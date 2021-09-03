import React from "react";
import { Header, Footer } from "../index";
import MobileNavbar from "../MobileNavbar";

function Layout({ children }) {
  return (
    <div>
        <Header />
        <MobileNavbar />
        {children}
        <Footer />
    </div>
  );
}

export default Layout;
