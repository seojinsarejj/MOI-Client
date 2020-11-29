import React , { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
    render () {
        const {name} = this.props;
        return (
            <a className="navitem" href = "">
                {name}
            </a>
        );
    }
}

export default NavItem;