import React, { Component } from 'react';
import './Login.css';
import logo from "../../images/favicon.png";

class Login extends Component {
    render() {

        const {setLoginOpen} = this.props;
        
        return (
            <div className = "loginPage">
                <div className = "loginHeader">
                    <button onClick={setLoginOpen}/>
                    <div className = "loginLogo">
                        <img src={logo}></img>
                    </div>
                    <div className = "loginInput">
                        <input className="InputBox" type="text" placeholder=" 이메일"></input>
                        <input className="InputBox" type="text" placeholder=" 비밀번호"></input>
                        <button className = "transBtn">로그인</button>
                    </div>
                    
                </div>

            </div>
        
        );
        
    }
}

export default Login;