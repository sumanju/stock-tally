import React, { Component } from "react";
import logo from "../homeimg.png"
import "./LoginSignupStyle.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HeaderComponent from "../header-section/HeaderComponent";

const formDefaultValue = {
    login : {
        mobNo  : '',
        password: '', 
    }, 
    register : {
        mobNo      : '',
        password    : '',
        confirmPass : '',
        userName    : ''
    }
}

class LoginSignupComponent extends Component {
    
    constructor() {
        super();
        this.state = formDefaultValue;
    }

    login() {
        console.log(this)
    }

    register() {

    }

    render() {
        if (this.props.isLogin)
            return (
                <React.Fragment>
                    <HeaderComponent className="navBar"/>
                    <div className="section">
                        <img src={logo} alt="default"/>
                        <div className="form-container">
                            <h2>Login</h2>
                            <TextField className="text-field" label="mobile no." variant="outlined" 
                                value={this.state.login.mobNo}
                                onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        login :{
                                            ...this.state.login,
                                            mobNo : e.target.value
                                        }
                                    })
                                }}
                                />
                            <TextField className="text-field" label="password" variant="outlined" 
                                value={this.state.login.password}
                                onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        login :{
                                            ...this.state.login,
                                            password : e.target.value
                                        }
                                    })
                                }}
                                />
                            <Button className="text-field" variant="contained" onClick={this.login.bind(this)}>login</Button>
                        </div>
                    </div>
                </React.Fragment>
            );
        else if (this.props.isSignup)
            return (
                <React.Fragment>
                    <HeaderComponent className="navBar"/>
                    <div className="section">
                        <img src={logo} alt="default"/>
                        <div className="form-container">
                            <h2>Register</h2>
                            <TextField className="text-field" label="mobile no." variant="outlined" 
                                value={this.state.register.mobNo}
                                onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        register :{
                                            ...this.state.register,
                                            mobNo : e.target.value
                                        }
                                    })
                                }}/>
                            <TextField className="text-field" label="password" variant="outlined" 
                                value={this.state.register.password}
                                onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        register :{
                                            ...this.state.register,
                                            password : e.target.value
                                        }
                                    })
                                }}/>
                            <TextField className="text-field" label="confirm password" variant="outlined" 
                                value={this.state.register.confirmPass}
                                onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        register :{
                                            ...this.state.register,
                                            confirmPass : e.target.value
                                        }
                                    })
                                }}/>
                            <TextField className="text-field" label="name" variant="outlined" 
                                value={this.state.register.userName}
                                onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        register :{
                                            ...this.state.register,
                                            userName : e.target.value
                                        }
                                    })
                                }}/>
                            <Button className="text-field" variant="contained" onClick={this.register.bind(this)}>Register</Button>
                        </div>
                    </div>
                </React.Fragment>
            );
                
    }
}

export default LoginSignupComponent;