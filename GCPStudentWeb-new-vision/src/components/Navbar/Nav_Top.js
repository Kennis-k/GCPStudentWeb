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
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/main"> Member </Link>
                    <Link to="/aboutUS"> AboutUs </Link>
                    <Link to="/news"> News </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
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