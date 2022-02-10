import styles from './style/ArchiveItem.module.css';

function ArchiveItem({ cityData, propFunc }) {
  function handleClick(e) {
    propFunc(e.currentTarget.id);
  }

  const renderList = () => {
    const result = [];
    for (let i = 0; i < cityData.length; i++) {
      if (cityData.length) {
        const item = cityData[i];
        const link = `https://drive.google.com/uc?export=download&id=${item.imageId.split('/')[5]}`;
        result.push(
          <li 
            id={item.id}
            onClick={handleClick} 
            className={styles.item} 
            key={i}
          >
            <img 
              className={styles.img_item}
              src={link}
            ></img>
            <div className={styles.textbox}>
              <div className={styles.namebox}>
                <p>{item.name}</p>
                <span>{`${item.subName} (${item.year})`}</span>
              </div>
              <div className={styles.tagbox}>
                {
                  item.role ? 
                    <span 
                      className={styles.tag}
                      style={{ backgroundColor: "rgb(155, 235, 135)" }}
                    >{item.role}</span> : ""
                }
                {
                  item.heritage === "1" ? 
                    <span 
                      className={styles.tag}
                      style={{ backgroundColor: "rgb(135, 232, 235)" }}
                    >문화재
                    </span> : ""
                }
                { item.existence === "1" ?
                    <span 
                      className={styles.tag}
                      style={{ backgroundColor: "rgb(235, 135, 135)" }}
                    >남아있음</span> : ""
                }
              </div>
            </div>
          </li>
        )
      }
    }
     return result;
  }

  return (renderList())
}

export default ArchiveItem;