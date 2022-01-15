import React from 'react';
import './LandingPageStyle.css'
import HeaderComponent from '../header-section/HeaderComponent';
import { HEADER_TYPE } from '../utils/AppType';
import DashboardComponent from './dashboard/DashboardComponent'

function LandingComponent(props) {

    switch (props.page) {

        case 'dashboard' : {
            return (
                <div className="container">
                    <HeaderComponent className="header" headerType={HEADER_TYPE.DASHBOARD}/>
                    <DashboardComponent/>
                </div>
            )
        } 
        case 'PL' : {
            return (
                <div className="container">
                    <HeaderComponent className="header" headerType={HEADER_TYPE.PL}/>
                    <h2>PL</h2>
                </div>
            )
        } 
        default : {
            <h1>Invalid Page</h1>
        }
    }

}

export default LandingComponent;