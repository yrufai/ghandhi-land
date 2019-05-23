import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";

const Navbar = () => (
  <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to="/" className="brand-logo">
        Ghaandhi land
      </Link>
      <SignedInLinks />
    </div>
  </nav>
);

export default Navbar;
