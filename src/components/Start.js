import logo from '../imgs/logo_bold_letter.png';
import styles from './Start.module.css';

function Start() {
  return (
    <div className={styles.container_start}>
      <img src={logo}/>
    </div>
  )
}

export default Start;