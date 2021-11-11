import React  from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import './Footer.css';

function Footer() {
    return <div className="footer">
        <div className="socialMedia">
            {""}
            {/*<InstagramIcon /><TwitterIcon /><FacebookIcon /><LinkedInIcon />*/}
            <a href="https://www.facebook.com/DSCIVE/" target="_blank"><FacebookIcon /></a>
        </div>c
        <p> &copy; 2021 GcpStudentClub.com</p>
    </div>;
}

export default Footer;