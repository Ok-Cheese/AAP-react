import DescContent from './DescContent';
import classes from './DescTable.module.css';

const DescTable = (props) => {
  const descList = props.descData.map(item => {
    return (
      <DescContent 
        key={item.id}
        name={item.name}
        desc={item.desc}
      />
    );
  });

  return (
    <ul className={classes.container__descList}>
      {descList}
    </ul>
  );
};

export default DescTable;