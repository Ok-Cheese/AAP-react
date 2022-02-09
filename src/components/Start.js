import logo from '../imgs/logo_bold_letter.png';
import styles from './style/Start.module.css';

function Start() {
  return (
    <div className={styles.container_start}>
      <img className={styles.start_logo} src={logo}/>
    </div>
  )
}

export default Start;