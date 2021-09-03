import React from "react";
import { Header, Footer } from "./index";
import Media from "react-media";
import MobileNavbar from "./MobileNavbar";

function Layout({ children }) {
  return (
    <div>
      {/* <Media queries={{ small: { maxWidth: 1024 } }}>
        {(matches) => (matches.small ? <MobileNavbar /> : <Header />)}
      </Media> */}
      <Header />
      <MobileNavbar />

      {children}
      <Footer />
    </div>
  );
}

export default Layout;
