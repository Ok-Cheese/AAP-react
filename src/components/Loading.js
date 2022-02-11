import emptyImg from '../imgs/logo_empty.png';
import styles from "./style/Loading.module.css";

function Loading({ cityData, propFunc }) {
  
  return (
    <div className={styles.outer}>
      <span className={styles.loading}>Now Loading...</span>
      <div className={styles.preload_imgs}>
        {propFunc()}
      </div>
    </div>
  )
}

export default Loading;