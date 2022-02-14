import emptyImg from '../imgs/logo_empty.png';
import logo from '../imgs/logo_bold_letter.png';
import styles from "./style/Loading.module.css";

function Loading({ cityData, propFunc }) {
  
  return (
    <div className={styles.outer}>
      <img
        src={logo}
        className={styles.loading_img}
      ></img>
      <div className={styles.preload_imgs}>
        {propFunc()}
      </div>
    </div>
  )
}

export default Loading;