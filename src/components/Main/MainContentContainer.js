import { useEffect, useState } from "react";

import MainContent from "./MainContent";
import classes from './MainContentContainer.module.css';

import MainPageData from '../../data/mainPageData';

const MainContentContainer = (props) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  
  useEffect(() => {
    if (isScrolling) {
      return;
    }
    
    const scrollTimer = setInterval(() => {
      if (scrollIndex === -2) {
        setScrollIndex(0);
      } else {
        setScrollIndex(current => current - 1);
      }
    }, 5000);
    
    return () => clearInterval(scrollTimer);
  }, [isScrolling, scrollIndex]);

  function onScrollHandler(event) {
    if (isScrolling) {
      return;
    }

    setIsScrolling(true);
    if (event.deltaY > 0 && scrollIndex > -2) {
      setScrollIndex(current => current - 1);
    } else if (event.deltaY < 0 && scrollIndex < 0) {
      setScrollIndex(current => current + 1);
    }

    setIsScrolling(false);
  }

  const mainContents = MainPageData.map(content => {
    return (
      <MainContent
        key={content.src}
        src={content.src}
        text={content.text}
      />
    );
  });

  return (
      <div 
        className={classes.container__mainContent}
        style={{ marginTop: `${scrollIndex * 100}vh` }}
        onWheel={onScrollHandler}
      >
        {mainContents}
      </div>
  );
};

export default MainContentContainer;