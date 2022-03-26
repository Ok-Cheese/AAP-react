import mark1 from '../imgs/Marks/경성.png';
import mark2 from '../imgs/Marks/인천.png';
import mark3 from '../imgs/Marks/대전.png';
import mark4 from '../imgs/Marks/대구.png';
import mark5 from '../imgs/Marks/부산.png';
import mark6 from '../imgs/Marks/군산.png';
import mark7 from '../imgs/Marks/목포.png';
import mark8 from '../imgs/Marks/광주.png';
import mark9 from '../imgs/Marks/평양.png';
import mark10 from '../imgs/Marks/청진.png';
import mark11 from '../imgs/Marks/신의주.png';
import mark12 from '../imgs/Marks/함흥.png';
import mark13 from '../imgs/Marks/원산.png';

const delayStart = 1000;
const delayInterval = 100;

const marksData = [
  {
    id: "01",
    name: "경성",
    top: "50%",
    left: "50%",
    src: mark1,
    timer: delayStart,
    isCenter: true
  },
  {
    id: "02",
    name: "인천",
    top: "0",
    left: "50%",
    src: mark2,
    timer: delayStart + (delayInterval * 1),
    isCenter: false
  },
  {
    id: "03",
    name: "대전",
    top: "6.75%",
    left: "75%",
    src: mark3,
    timer: delayStart + (delayInterval * 2),
    isCenter: false
  },
  {
    id: "04",
    name: "대구",
    top: "25%",
    left: "93.25%",
    src: mark4,
    timer: delayStart + (delayInterval * 3),
    isCenter: false
  },
  {
    id: "05",
    name: "부산",
    top: "50%",
    left: "100%",
    src: mark5,
    timer: delayStart + (delayInterval * 4),
    isCenter: false
  },
  {
    id: "06",
    name: "군산",
    top: "75%",
    left: "93.25%",
    src: mark6,
    timer: delayStart + (delayInterval * 5),
    isCenter: false
  },
  {
    id: "07",
    name: "목포",
    top: "93.25%",
    left: "75%",
    src: mark7,
    timer: delayStart + (delayInterval * 6),
    isCenter: false
  },
  {
    id: "08",
    name: "광주",
    top: "100%",
    left: "50%",
    src: mark8,
    timer: delayStart + (delayInterval * 7),
    isCenter: false
  },
  {
    id: "09",
    name: "평양",
    top: "93.25%",
    left: "25%",
    src: mark9,
    timer: delayStart + (delayInterval * 8),
    isCenter: false
  },
  {
    id: "10",
    name: "청진",
    top: "75%",
    left: "6.75%",
    src: mark10,
    timer: delayStart + (delayInterval * 9),
    isCenter: false
  },
  {
    id: "11",
    name: "신의주",
    top: "50%",
    left: "0%",
    src: mark11,
    timer: delayStart + (delayInterval * 10),
    isCenter: false
  },
  {
    id: "12",
    name: "함흥",
    top: "25%",
    left: "6.75%",
    src: mark12,
    timer: delayStart + (delayInterval * 11),
    isCenter: false
  },
  {
    id: "13",
    name: "원산",
    top: "6.75%",
    left: "25%",
    src: mark13,
    timer: delayStart + (delayInterval * 12),
    isCenter: false
  },
];

export default marksData;