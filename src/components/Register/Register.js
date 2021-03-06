import React, { Component } from 'react';
import './Register.css';
import logo from "../../images/favicon.png";

class Register extends Component {
    render() {

        const {setRegOpen} = this.props;
        
        return (
            <div className = "loginPage">
                <div className = "loginHeader">
                    <button className="xBtn" onClick={setRegOpen}>X</button>
                    <div className = "loginLogo">
                        <img src={logo}></img>
                    </div>
                    <div className = "loginInput">
                        <input className="InputBox" type="text" placeholder=" 이메일"></input>
                        <input className="InputBox" type="text" placeholder=" 비밀번호"></input>
                        <button className = "transBtn">회원가입</button>
                    </div>
                </div>

            </div>
        
        );
        
    }
}

export default Register;