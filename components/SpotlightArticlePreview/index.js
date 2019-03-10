import React from 'react'
import styles from './SpotlightArticlePreview.scss'

const SpotlightArticlePreview = ({
  title,
  description,
  image,
  showBig
}) => (
  <div className={styles.post}>
    <figure className={`${styles.cover} ${showBig && styles.big}`}>
      <img
        src={image}
        alt="Article image preview"
      />
    </figure>
    <h2 className={`${styles.title} ${showBig && styles.big}`}>
      { title }
    </h2>
    <article className={`${styles.description} ${showBig && styles.big}`}>
      { description }
    </article>
  </div>
)

SpotlightArticlePreview.defaultProps = {
  showBig: false
};

export default SpotlightArticlePreview