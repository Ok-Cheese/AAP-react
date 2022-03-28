import { useState } from 'react';

import ItemInform from './ItemInform';
import ItemImg from './ItemImg';
import classes from './ArchiveListItem.module.css';

const ArcvhiveListItem = (props) => {
  const [isMouseHover, setIsMouseHover] = useState(false);

  function onClickHandler(event) {
    props.onItemClickHandler(props.itemData);
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
      onClick={onClickHandler} 
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