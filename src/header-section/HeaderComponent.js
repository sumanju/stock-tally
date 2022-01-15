import React from "react";
import { HEADER_TYPE } from "../utils/AppType";
import "./HeaderStyle.css";

const HeaderComponent = (props) => {
    const headerType = props.headerType
    return (
        <React.Fragment>
            <div className="header">
                <div className="logo">
                    Stocks Tally
                </div>
                { (headerType === HEADER_TYPE.REGISTER) || (headerType === HEADER_TYPE.LOGIN) ?
                    <div className="action">
                        <ul className="action-list">
                            <li className={headerType === HEADER_TYPE.LOGIN ? "action-list-item border-color" :  "action-list-item"}>
                                <a href="/login">Login</a>
                            </li>
                            <li className={ headerType === HEADER_TYPE.REGISTER ? "action-list-item border-color" :  "action-list-item" }>
                                <a href="/register">Register</a>
                            </li>
                            <li className={ "action-list-item" }>
                                <a href="/">About</a>
                            </li>
                        </ul>
                    </div>
                    :
                    <div className="action">
                        <ul className="action-list">
                            <li className={(headerType === HEADER_TYPE.DASHBOARD) ? "action-list-item border-color" :  "action-list-item"}>
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li className={(headerType === HEADER_TYPE.PL) ? "action-list-item border-color" :  "action-list-item"}>
                                <a href="/PL">PL</a>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default HeaderComponent;