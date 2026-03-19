import React from "react";
import NavbarBelt from "./navbarBelt/navbarBelt";
import NavbarBanner from "./navbarBanner/navbarBanner";
const Navbar =() =>{
    return(
        <div className="navbar">
        <NavbarBelt/>
        <NavbarBanner/>
        </div>
    )
}

export default Navbar