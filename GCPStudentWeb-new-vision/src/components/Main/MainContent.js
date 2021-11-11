
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
