import React from "react";
import NavbarBelt from './navbar-belt';
import NavbarBanner from './navbar-banner';
// import NavbarBanner from "./navbarBanner/navbarBanner";
function navbar(){
    return(
        <div className="navbar">
        <NavbarBelt />
        <NavbarBanner />
        </div>
    )
}

export default navbar;
