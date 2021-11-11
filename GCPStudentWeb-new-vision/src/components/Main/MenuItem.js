import React from "react";

function MenuItem({ image, name, position }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h4> {name} </h4>
            <h4> {position} </h4>
        </div>
    );
}

export default MenuItem;