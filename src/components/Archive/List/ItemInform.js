import ItemTag from './ItemTag';
import classes from './ItemInform.module.css';

const ItemInform = (props) => {
  return (
    <div className={classes.itemInform}>
      <div className={classes.container__name}>
        <span className={classes.name}>{props.itemData.name}</span>
        <span className={classes.subName}>
          {`${props.itemData.subName} (${props.itemData.year})`}
        </span>
      </div>
      <div className={classes.container__tag}>
        {
          props.itemData.role ? 
            <ItemTag type={props.itemData.role} color={"#E0DDCF"}/> : ""
        }
        {
          props.itemData.heritage === "1" ? 
            <ItemTag type={"문화재"} color={"#E0DDCF"}/> :
            <ItemTag type={"비문화재"} color={"#E0DDCF"}/>
        }
        { props.itemData.existence === "1" ?
            <ItemTag type={"현존"} color={"#E0DDCF"}/> :
            <ItemTag type={"소실"} color={"#E0DDCF"}/>
        }
      </div>
    </div>
  );
};

export default ItemInform;