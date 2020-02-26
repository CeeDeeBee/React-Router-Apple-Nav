import React from "react";
import "./SubNav.css";

const SubNav = ({ items, bgColor = "rgba(245, 245, 247, 0.6)", textColor = "black", bgImg = "" }) => {
    console.log(bgColor);
    return (
        <div className="sub-nav-wrapper" style={{ backgroundColor: bgColor, color: textColor, backgroundImage: bgImg }}>
            <nav>
                {items.map(item => {
                    return (
                        <div className="sub-nav-item">
                            <img src={item.image} alt={item.text} />
                            <p>{item.text}</p>
                        </div>
                    );
                })}
            </nav>
        </div>
    )
}

export default SubNav;