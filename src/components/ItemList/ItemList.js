import React, { Component } from "react";
import "./ItemList.css";
import Item from "../../components/Item/Item";

// class ItemList extends Component {
//   constructor(props) {}

//   render() {
//     const mappingItemList = (list) =>
//       this.map((item, idx) => <Item list={item} key={idx} />);
//     return <div className="itemList">{mappingItemList(this.props)}</div>;
//   }
// }

const ItemList = ({ list }) => {
  const mappingItemList = (list) =>
    list.map((item, idx) => <Item list={item} key={idx} />);

  return <div className="itemList">{mappingItemList(list)}</div>;
};

export default ItemList;
