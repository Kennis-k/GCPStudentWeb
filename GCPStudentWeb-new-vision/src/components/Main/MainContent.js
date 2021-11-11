
import image16 from "../../ICON/SamLam.png";
import image20 from "../../ICON/AlexCheng.png";
import image2 from "../../ICON/AlexLuk.png";
import image3 from "../../ICON/AnsonLam.png";
import image4 from "../../ICON/Chan man Fung.png";
import image5 from "../../ICON/CHAN Wai Lam.png";
import image6 from "../../ICON/ChoiCheukLam.png";
import image7 from "../../ICON/FokWaiYin.png";
import image8 from "../../ICON/HugoCheng.png";
import image9 from "../../ICON/HuiKaiHin.png";
import image10 from "../../ICON/JackChan.png";
import image11 from "../../ICON/JackyHo.png";
import image12 from "../../ICON/LawMeiChing.png";
import image14 from "../../ICON/PunChoYan.png";
import image15 from "../../ICON/RonaldLeung.png";
import image17 from "../../ICON/TIAN Li.png";
import image18 from "../../ICON/TsuiKaYan.png";
import image19 from "../../ICON/WONG Chiu Ching.png";
import image13 from "../../ICON/MakYeungFung.png";
import React from "react";
import MenuItem from "./MenuItem";
import "./MainContent.css";
import {MemberList1} from "../../data/Member/Member1";


function MainContent () {
    return(
        <div className="menu">
            <div className="menuList">
                {MemberList1.map((menuItem, key) => {
                    return (
                        <MenuItem
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            position={menuItem.position}
                        />
                    );
                })}
            </div>
        </div>
    );
}


export default MainContent;
