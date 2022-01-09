import React from "react";
import "./HeaderStyle.css";

const HeaderComponent = (props) => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="logo">
                    Stocks Tally
                </div>
                <div className="action">
                    <ul className="action-list">
                        <li className="action-list-item">
                            <a href="/login">Login</a>
                        </li>
                        <li className="action-list-item">
                            <a href="/register">Register</a>
                        </li>
                        <li className="action-list-item">
                            <a href="/">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderComponent;