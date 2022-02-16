import { useEffect} from 'react';
import emptyImg from '../imgs/logo_empty.png';
import styles from './style/ArchiveItem.module.css';

function ArchiveItem({ cityData, propFunc, filterData }) {
  function handleClick(e) {
    propFunc(e.currentTarget.id);
  }

  const renderList = (filterData) => {
    const result = [];
    /* const trueArr = [];
    for (let key of Object.keys(filterData)) {
      if (filterData[key]) {
        trueArr.push(key);
      }
    } */
    for (let i = 0; i < cityData.length; i++) {
      const item = cityData[i];
      if (
        filterData[item.role]
        || (item.heritage === "1" && filterData["문화재"])
        || (item.heritage === "0" && filterData["비문화재"])
        || (item.existence === "1" && filterData["현존"])
        || (item.existence === "0" && filterData["소실"])
      ) {
        const link = item.imageId ?
        `https://lh3.googleusercontent.com/d/${cityData[i].imageId.split('/')[5]}=s500?authuser=0`
        : emptyImg;
        result.push(
          <li 
            id={item.id}
            onClick={handleClick} 
            className={styles.item} 
            key={i}
          >
            <div className={styles.img_container}>
              <img
                className={styles.img_item}
                //style={{ backgroundImage: `URL(${link})` }}
                src={link}
              ></img>
            </div>
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
                    >{item.role}</span> : ""
                }
                {
                  item.heritage === "1" ? 
                    <span 
                      className={styles.tag}
                    >문화재
                    </span> :
                    <span 
                      className={styles.tag}
                    >비문화재
                    </span>
                }
                { item.existence === "1" ?
                    <span 
                      className={styles.tag}
                    >현존</span> :
                    <span 
                      className={styles.tag}
                    >멸실</span> 
                }
              </div>
            </div>
          </li>
        )
      } else {
        continue;
      }
    }
    if (result.length < 1) {
      return (<span className={styles.empty_list}>조건에 맞는 건물이 없습니다.</span>)
    }
    return result;
  }

  return (renderList(filterData))
}

export default ArchiveItem;