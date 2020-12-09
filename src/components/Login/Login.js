import React, { Component } from 'react';
import './Login.css';
import logo from "../../images/favicon.png";
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {

        const {setLoginOpen} = this.props;
        
        return (
            <div className = "loginPage">
                <div className = "loginHeader">
                    <button className="xBtn" onClick={setLoginOpen}>X</button>
                    <div className = "loginLogo">
                        <img src={logo}></img>
                    </div>
                    <div className = "loginInput">
                        <input className="InputBox" type="text" placeholder=" 이메일"></input>
                        <input className="InputBox" type="text" placeholder=" 비밀번호"></input>
                        <Link to='/home'>
                        <button className = "transBtn">로그인</button>
                        </Link>
                    </div>
                    
                </div>

            </div>
        
        );
        
    }
}

export default Login;