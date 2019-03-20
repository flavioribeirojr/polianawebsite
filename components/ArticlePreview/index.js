import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ArticlePreview.scss'

/**
 * ArticlePreview Component
 * 
 * @param {Object} props Component props
 * @param {String} props.title The article title
 * @param {String} props.category The article category
 * @param {String} props.image The article image
 * @param {String} props.description The article description
 * @param {String} props.slug The article slug
 */
const ArticlePreview = ({
  title,
  category,
  description,
  image,
  slug
}) => (
  <div className={styles.articlePreview}>
    <header>
      <img src={image} />
    </header>
    <div className={styles.body}>
      <h1 className={styles.title}>{ title }</h1>
      <h2 className={styles.category}>{ category }</h2>
      <article>
        { description }
      </article>
      <footer>
        <a href={`/artigo/${slug}`}>
          Continue lendo <FontAwesomeIcon icon="angle-right" />
        </a>
      </footer>
    </div>
  </div>
)

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ArticlePreview