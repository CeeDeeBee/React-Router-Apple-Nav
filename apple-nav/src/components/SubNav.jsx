import React from "react";
import "./SubNav.css";

const SubNav = ({ items }) => {
    return (
        <div className="sub-nav-wrapper">
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