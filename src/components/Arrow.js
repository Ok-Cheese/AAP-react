import { Link } from 'react-router-dom';
import arrow_left from '../imgs/arrow_left.png';
import arrow_right from '../imgs/arrow_right.png';
import arrow_up from '../imgs/arrow_up.png';
import styles from './style/Arrow.module.css';



function ArrowUp() {
  return (
    <Link
      className={styles.arrow_up}
      style={{
        backgroundImage: `url(${arrow_up})`,
      }}
      to=""
    >
    </Link>
  )
}

function ArrowLeft() {
  return (
    <Link
      className={styles.arrow_left}
      style={{
        backgroundImage: `url(${arrow_left})`,
      }}
      to=""
    >
    </Link>
  )
}

function ArrowRight() {
  return (
    <Link
      className={styles.arrow_right}
      style={{
        backgroundImage: `url(${arrow_right})`,
      }}
      to=""
    >
    </Link>
  )
}

export {ArrowUp, ArrowLeft, ArrowRight};