import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        
        return (
            <div className="item">
                <div className="projectTitle">
                    프로젝트 이름
                </div>
                <div className="tag">
                    #태그 #태그 #태그
                </div>
            </div>
        );
        
    }
}

export default Item;