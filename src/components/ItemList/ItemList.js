import React, { Component } from 'react';
import './ItemList.css';
import Item from '../../components/Item/Item'

class ItemList extends Component {
    render() {
        
        return (
            <div className="itemList">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                
            </div>
        );
        
    }
}

export default ItemList;