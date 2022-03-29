import classes from './ItemTag.module.css';

const ItemTag = (props) => {
  return (
    <span 
      className={classes.tag}
      style={{backgroundColor: props.color}}
    >{props.type}</span>
  )
}

export default ItemTag;