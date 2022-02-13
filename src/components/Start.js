import logo from '../imgs/logo_bold_letter.png';
import main1 from '../imgs/main1.jpg';
import main2 from '../imgs/main2.jpg';
import main3 from '../imgs/main3.jpg';
import styles from './style/Start.module.css';

function Start() {
  return (
    <div className={styles.container_start}>
      <img className={styles.start_logo} src={logo}/>
      <div className={styles.container_preload}>
        <img className={styles.preload_img} src={main1} />
        <img className={styles.preload_img} src={main2} />
        <img className={styles.preload_img} src={main3} />
      </div>
    </div>
  )
}

export default Start;