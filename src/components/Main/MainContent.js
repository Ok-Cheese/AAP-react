import classes from './MainContent.module.css';

const MainContent = (props) => {
  return (
    <div className={classes.container__mainImg}>
      <img 
        id={props.id}
        className={classes.mainImg} 
        src={props.src}
      >
      </img>
      <p className={classes.introduce}>
        {props.text}
      </p>
    </div>
  );
};

export default MainContent;