import React, { Component } from 'react';
import './Navbar.css';
import NavItem from '../NavItem/NavItem';


class Navbar extends Component {
    render() {
        const {onClick} = this.props;
        return (
            
            <div>
                <div class = "list">
                    <NavItem  name="프로젝트"/>
                    <hr className="hr_v"/>
                    <NavItem  name="학생"/>
                    <hr className="hr_v"/>
                    <NavItem  name="통계"/>

                </div>
                <div>
                    <hr></hr>
                </div>
                <div><button onClick={onClick} className="createBtn">프로젝트 만들기</button></div>
                
            </div>
        
        );
        
    }
}

export default Navbar;