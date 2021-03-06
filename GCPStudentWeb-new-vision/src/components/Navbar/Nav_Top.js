import React, { useState } from "react";
import Logo from "../../image/googleLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./Nav_top.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img className="desktop" src={Logo} /><div className="logoName"><h4>Google Developer Student Club (IVE)</h4></div>
                <div className="hiddenLinks">
                    <Link to="/GCPStudentWeb/"> Home </Link>
                    <Link to="/main"> Member </Link>
                    <Link to="/aboutUS"> AboutUs </Link>
                    <Link to="/news"> News </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/GCPStudentWeb/"> Home </Link>
                <Link to="/main"> Member </Link>
                <Link to="/aboutUS"> AboutUs </Link>
                <Link to="/news"> News </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;