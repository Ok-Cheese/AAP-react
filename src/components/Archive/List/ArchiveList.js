import ArchiveListItemContainer from './ArchiveListItemContainer.js';
import ArchiveListFilter from '../Filter/ArchiveListFilter.js';
import classes from './ArchiveList.module.css';


const ArchiveList = () => {
  return (
    <ul className={classes.archiveList}>
      <ArchiveListItemContainer></ArchiveListItemContainer>
      <ArchiveListFilter/>
    </ul>
  );
};

export default ArchiveList;