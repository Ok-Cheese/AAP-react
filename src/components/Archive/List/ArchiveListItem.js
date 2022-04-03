import { useContext, useState } from 'react';

import ItemInform from './ItemInform';
import ItemImg from './ItemImg';
import classes from './ArchiveListItem.module.css';

import archiveContext from '../../../context/archiveContext';

const ArcvhiveListItem = (props) => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const archiveContextValue = useContext(archiveContext);

  function onClickHandler() {
    archiveContextValue.onItemClickHandler(props.itemData);
  }

  function onMouseEnterHandler() {
    setIsMouseOn(true);
  }

  function onMouseLeaveHandler() {
    setIsMouseOn(false);
  }

  return (
    <li 
      id={props.itemData.id}
      className={classes.listItem}
      onClick={onClickHandler} 
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <ItemImg 
        imgId = {props.itemData.imageId}
        isMouseOn={isMouseOn}
      />
      <ItemInform itemData={props.itemData} />
      <hr></hr>
    </li>
  );
};

export default ArcvhiveListItem;