import { useEffect, useRef, useState } from "react";

import MainContent from "./MainContent";
import MainPageData from '../../data/mainPageData';

import classes from './MainPage.module.css';

const MainPage = (props) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollOrder, setScrollOrder] = useState(0);

  const container__main = useRef();

  useEffect(() => {
    if (props.isStarting || isScrolling) {
      return;
    }

    const scrollTimer = setInterval(() => {
      const currentMargin = container__main.current.style.marginTop;
      if (currentMargin === "-200vh") {
        container__main.current.style.marginTop = "0vh";
      } else {
        container__main.current.style.marginTop = `${+currentMargin.split('vh')[0] - 100}vh`;
      }
    }, 5000);

    return () => clearInterval(scrollTimer);
  }, [props.isStarting, isScrolling]);

  function onScrollHandler(event) {
    if (isScrolling) {
      return;
    }
    let imgOrder;
    setIsScrolling(true);
    if (event.deltaY > 0 && scrollOrder < 2) {
      imgOrder = scrollOrder + 1;
    } else if (event.deltaY < 0 && scrollOrder > 0) {
      imgOrder = scrollOrder - 1;
    } else {
      imgOrder = scrollOrder;
    }
    container__main.current.style.marginTop = `${imgOrder * -100}vh`;

    // Main2.module.css의 .container_main transition과 시간 맞출 것.
    setTimeout(() => {
      setScrollOrder(imgOrder);
      setIsScrolling(false);
    }, 1000);
  }

  const mainContents = MainPageData.map((content, idx) => {
    return (
      <MainContent
        key={idx}
        src={content.src}
        text={content.text}
      />
    )
  })

  return (
      <div 
        className={classes.container__main}
        ref={container__main}
        onWheel={onScrollHandler}
      >
        {mainContents}
      </div>
  )
};

export default MainPage;