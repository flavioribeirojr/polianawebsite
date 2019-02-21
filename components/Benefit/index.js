import React from 'react'
import PropTypes from 'prop-types'
import styles from './Benefit.scss'

/**
 * 
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.description
 * @param {String} props.image
 * @param {String} props.position
 */
const Benefit = ({ title, description, image, position }) => (
  <article className={`${styles.benefit} ${ styles[position] }`}>
    <img src={image} alt="Welcome image" />
    <div className={styles.info}>
      <h1 className={styles.title}>{ title }</h1>
      <p className={styles.description}>{ description }</p>
    </div>
  </article>
)

Benefit.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right'])
}

export default Benefit