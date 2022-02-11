import itemData from "../data/item.js";
import styles from "./style/Loading.module.css";

function Loading({ cityData }) {
  function preloading() {
    const result = [];
    for (let i = 0; i < cityData.length; i++) {
      result.push(
      <img
        key={i}
        className={styles.preload_img}
        src={`https://drive.google.com/uc?export=download&id=${cityData[i].imageId.split('/')[5]}`}
      />
      )
    }
    return result;
  }
  return (
    <div className={styles.outer}>
      <span className={styles.loading}>Now Loading...</span>
      <div className={styles.preload_imgs}>
        {preloading()}
      </div>
    </div>
  )
}

export default Loading;