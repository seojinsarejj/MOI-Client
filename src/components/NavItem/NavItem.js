import React , { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
    render () {
        const { name,is_active,onClick } = this.props;
        return (
            <div
                className = {is_active ? "active_navitem" : "navitem"}
                onClick = {onClick}
            >
                {name}
            </div>
        );
    }
}

export default NavItem;