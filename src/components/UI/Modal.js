import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <section className={classes.background__modal}>
      <div 
        className={classes.modal}
        style={{ width: props.width, height: props.height }}
      >
        {props.children}
      </div>
    </section>
  )
}

export default Modal;