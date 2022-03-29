/* global kakao */
import ArchiveMap from './ArchiveMap';
import MapIndex from './MapIndex';
import classes from './ArchiveMapContainer.module.css';

import logo from '../../../imgs/logo_border.jpg';

const ArchiveMapContianer = (props) => {
  return (
    <div className={classes.contianer__map}>
      <ArchiveMap/>
      <img className={classes.logo__map}src={logo}></img>
      <MapIndex></MapIndex>
    </div>
  )
}

export default ArchiveMapContianer;