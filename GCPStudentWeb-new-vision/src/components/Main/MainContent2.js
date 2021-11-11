
import React from "react";
import MenuItem from "./MenuItem";
import "./MainContent.css";
import {MemberList2} from "../../data/Member2/Member2";


function MainContent2 () {
    return(
        <div className="menu">
            <div className="menuList">
                {MemberList2.map((menuItem, key) => {
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


export default MainContent2;
