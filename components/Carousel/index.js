import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Carousel.scss'

export const CarouselDots = (dots) => (
  <ul style={{ left: 0 }}>
    { dots }
  </ul>
)

export const CarouselArrows = ({ className, style, onClick, icon }) => (
  <div
    className={className}
    style={{ ...style, display: 'block'}}
    onClick={onClick}
  >
    <FontAwesomeIcon className={styles.arrow} icon={icon} />
  </div>
)