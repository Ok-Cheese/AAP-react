import classes from './CityDescTable.module.css';
import DescContainer from './DescContainer';

const CItyDescTable = (props) => {
  const descList = props.descData.map(item => {
    return (
      <DescContainer 
        key={item.id}
        name={item.name}
        desc={item.desc}
      />
    );
  });

  return (
    <div className={classes.container__descList}>
      {descList}
    </div>
  );
};

export default CItyDescTable