import React, { Component } from "react";
import axios from "axios";
import logo from "../homeimg.png"
import "./LoginSignupStyle.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HeaderComponent from "../header-section/HeaderComponent";
import { HEADER_TYPE } from '../utils/AppType'

const formDefaultValue = {
    login : {
        mobileNo: '',
        password: '', 
    }, 
    register : {
        mobileNo    : '',
        password    : '',
        confirmPass : '',
        userName    : ''
    }
}

class LoginSignupComponent extends Component {
    
    constructor() {
        super();
        this.lookForExistingSession();
        this.state = formDefaultValue;
    }

    async lookForExistingSession() {
        if (sessionStorage.getItem('auth') && sessionStorage.getItem('stime')) {
            window.open('/dashboard', '_self');
        }
    }

    async login() {
        if (this.state.login.password && this.state.login.mobileNo) {
            try {
                const response = await axios({
                    method: 'POST',
                    url: 'http://localhost:4200/login',
                    data: this.state.login
                })
                if (response.status === 200 && response.data.token != null) {
                    if (response.data && response.data.token) {
                        sessionStorage.setItem('auth', response.data.token);
                        sessionStorage.setItem('stime', Date.now());
                        window.open('/dashboard', '_self')
                    }
                }
            } catch (err) {
                alert(err);
            }
        } 
    }

    async register() {
        if (this.state.register.userName && this.state.register.password && this.state.register.mobileNo) {
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:4200/register',
                data: this.state.register   
            })
            if (response.status === 500) {
                alert("server error");
            }
            else if (response.data === 'duplicate') {
                alert('user exist');
            } else {
                window.open('/login', '_self');
            }
        }
    }

    render() {
        if (this.props.isLogin) {
            return (
                <React.Fragment>
                    <HeaderComponent className="navBar" headerType={HEADER_TYPE.LOGIN}/>
                    <div className="section">
                        <img src={logo} alt="default"/>
                        <div className="form-container">
                            <h2>Login</h2>
                            <TextField className="text-field" label="mobile no." variant="outlined"
                                type="number"
                                value={this.state.login.mobileNo}
                                onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        login :{
                                            ...this.state.login,
                                            mobileNo : e.target.value
                                        }
                                    })
                                }}
                                />
                            <TextField className="text-field" type="password" label="password" variant="outlined" 
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
        } else if (this.props.isSignup) {
            return (
                <React.Fragment>
                    <HeaderComponent className="navBar" headerType={HEADER_TYPE.REGISTER}/>
                    <div className="section">
                        <img src={logo} alt="default"/>
                        <div className="form-container">
                            <h2>Register</h2>
                            <TextField className="text-field" label="mobile no." variant="outlined"
                                type="number"
                                value={this.state.register.mobileNo}
                                onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        register :{
                                            ...this.state.register,
                                            mobileNo : e.target.value
                                        }
                                    })
                                }}/>
                            <TextField className="text-field" type="password" label="password" variant="outlined" 
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
                            <TextField className="text-field" type="password" label="confirm password" variant="outlined" 
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
}

export default LoginSignupComponent;