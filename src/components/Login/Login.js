import React, { Component } from 'react';
import './Login.css';
import logo from "../../images/favicon.png";

class Login extends Component {
    render() {
        
        return (
            <div className = "loginPage">
                <div className = "loginHeader">
                    <div className = "loginLogo">
                        <img src={logo}></img>
                    </div>
                    <div className = "loginInput">
                        <input className="InputBox" type="text" placeholder=" 이메일"></input>
                        <input className="InputBox" type="text" placeholder=" 비밀번호"></input>
                        <button className = "transBtn">처음 사용하시나요?</button>
                    </div>
                </div>

                <div className = "loginFooter">
                    <button className = "loginBtn">로그인</button>
                </div>
            </div>
        
        );
        
    }
}

export default Login;