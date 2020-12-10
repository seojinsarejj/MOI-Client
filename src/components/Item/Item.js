import React from "react";
import Tag from "../tag/tag";
import "./Item.css";

// class Item extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "title", tags: [] };
//   }

//   render() {
//     //const tag = "#" + tags.join(" #");
//     return (

//     );
//   }
// }

const Item = ({ list }) => {
  const mappingTagList = (list) =>
    list.tags.map((item, idx) => <Tag tag={item} key={idx} />);

  return (
    <div className="item">
      <div className="projectTitle">{list.title}</div>
      <div className="tag">{mappingTagList(list)}</div>
    </div>
  );
};

export default Item;
