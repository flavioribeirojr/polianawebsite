import React from 'react'
import styles from './SpotlightArticlePreview.scss'

const SpotlightArticlePreview = ({
  title,
  description,
  image,
  slug,
  showBig
}) => (
  <div className={`${styles.post} ${showBig && styles.big}`}>
    <figure className={`${styles.cover} ${showBig && styles.big}`}>
      <img
        src={image}
        alt="Article image preview"
      />
    </figure>
    <a
      className={`${styles.title} ${showBig && styles.big}`}
      href={`/artigo/${slug}`}
    >
      { title }
    </a>
    <article className={`${styles.description} ${showBig && styles.big}`}>
      { description }
    </article>
  </div>
)

SpotlightArticlePreview.defaultProps = {
  showBig: false
};

export default SpotlightArticlePreview