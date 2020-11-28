import React, { Component } from 'react';
import './Navbar.css';
import NavItem from '../NavItem/NavItem';


class Navbar extends Component {
    render() {
        const {active,onNavItemClick} = this.props;
        return (
            
            <div>
                <div class = "list">
                    <NavItem  name="프로젝트" is_active={active===1} onClick = {() => onNavItemClick(1)}/>
                    <hr className="hr_v"/>
                    <NavItem  name="학생" is_active={active===2} onClick = {() => onNavItemClick(2)}/>
                    <hr className="hr_v"/>
                    <NavItem  name="통계" is_active={active===3} onClick = {() => onNavItemClick(3)}/>

                </div>
                <div>
                    <hr></hr>
                </div>
            </div>
        
        );
        
    }
}

export default Navbar;