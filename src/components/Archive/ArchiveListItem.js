import { useState } from 'react';

import ItemInform from './ItemInform';
import ItemImg from './ItemImg';
import classes from './ArchiveListItem.module.css';

const ArcvhiveListItem = (props) => {
  const [isMouseHover, setIsMouseHover] = useState(false);

  function onItemClickHandler(event) {
    props.onItemClick(event.currentTarget.id);
  }

  function onMouseEnterHandler(event) {
    setIsMouseHover(true);
  }

  function onMouseLeaveHandler(event) {
    setIsMouseHover(false);
  }

  return (
    <li 
      id={props.itemData.id}
      className={classes.item}
      onClick={onItemClickHandler} 
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <ItemImg 
        imgId = {props.itemData.imageId}
        isMouseHover={isMouseHover}
      />
      <ItemInform itemData={props.itemData} />
      <hr></hr>
    </li>
  )
}

export default ArcvhiveListItem;