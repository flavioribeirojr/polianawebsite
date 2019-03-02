import React from 'react'
import PropTypes from 'prop-types'
import styles from './GalleryItem.scss'

const GalleryItem = ({ source, caption, onClick }) => (
  <figure className={styles.galleryItem} onClick={onClick}>
    <img src={source} alt={caption} />
    <figcaption>
      { caption }
    </figcaption>
  </figure>
)

GalleryItem.propTypes = {
  source: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
}

export default GalleryItem