import React from "react";
import { FAQ } from "./faqs";
import { Logo } from "./logo";
import { Profile } from "./profile";
import { Platforms } from "./platforms";
import { SearchBar } from "./search-bar";
import { BreadCrumbs } from "./breadcrumbs";
import "./index.css";

const Navbar = function (props) {
  
  return (
    <div className="nb-container">
      <div className="nb-logo-wrapper">
        <Logo />
        <BreadCrumbs />
        <SearchBar />
      </div>
      <div className="nb-faq-wrapper">
        <Platforms />
        <FAQ />
        <Profile />
      </div>
    </div>
  );
};
export default Navbar;

// wiring-framing
// Texting
//styling your containers -waterfall model
//style the children of container we styled earlier
// After all the container and children
