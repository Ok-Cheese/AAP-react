import indexHeritage from '../../../imgs/legend_heritage.png';
import indexNonHeritage from '../../../imgs/legend_non_heritage.png';
import classes from './MapIndex.module.css';

const MapIndex = () => {
  return (
    <div className={classes.mapIndex}>
      <div className={classes.row__mapIndex}>
        <img src={indexHeritage} className={classes.icon__mapIndex}></img>
        <span>문화재</span>
      </div>
      <div className={classes.row__mapIndex}>
        <img src={indexNonHeritage} className={classes.icon__mapIndex}></img>
        <span>비문화재</span>
      </div>
    </div>
  )
};

export default MapIndex;