import { useEffect } from 'react';
import styles from './style/ArchiveItem.module.css';

function ArchiveItem({ cityData, propFunc, filterData }) {
  function handleClick(e) {
    propFunc(e.currentTarget.id);
  }

  useEffect(() => {
    console.log(1);
  }, [filterData]);
  const renderList = (filterData) => {
    const result = [];
    const trueArr = [];
    for (let key of Object.keys(filterData)) {
      if (filterData[key]) {
        trueArr.push(key);
      }
    }
    for (let i = 0; i < cityData.length; i++) {
      const item = cityData[i];
      if (trueArr.includes(item.role)
        || (trueArr.includes("문화재") && item.heritage === 1)
        || (trueArr.includes("비문화재") && item.heritage === 0)
        || (trueArr.includes("현존") && item.existence === 1)
        || (trueArr.includes("소실") && item.heritage === 0)
      ) {
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
                    </span> :
                    <span 
                      className={styles.tag}
                      style={{ backgroundColor: "rgb(135, 232, 235)" }}
                    >비문화재
                    </span>
                }
                { item.existence === "1" ?
                    <span 
                      className={styles.tag}
                      style={{ backgroundColor: "rgb(235, 135, 135)" }}
                    >남아있음</span> :
                    <span 
                      className={styles.tag}
                      style={{ backgroundColor: "rgb(235, 135, 135)" }}
                    >소실</span> 
                }
              </div>
            </div>
          </li>
        )
      }
    }
     return result;
  }

  return (renderList(filterData))
}

export default ArchiveItem;