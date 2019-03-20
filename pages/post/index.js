import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppWrapper from 'pages/AppWrapper'
import { getPost, getPosts } from 'domains/Blog/service'
import { Link } from 'react-scroll'
import ArticlePreview from '@/ArticlePreview'
import styles from './Post.scss'
import theme from 'pages/theme.scss';

const content = require('./content')

export default function Post({ post }) {
  const [ relatedArticles, setRelatedArticles ] = useState([])

  useEffect(function fetchRelatedPosts() {
    if (!relatedArticles.length) {
      getPosts(post.category_id)
        .then(posts => setRelatedArticles(posts))
    }
  })

  return (
    <AppWrapper controlScroll>
      <div className={styles.articleCaption}>
        <img
          className={styles.caption}
          src={post.image}
        />
        <h1
          className={styles.postTitle}
        >
          { post.title }
        </h1>
        <h2 className={styles.postDescription}>
          { post.description }
        </h2>
        <div className={styles.postBottom}>
          <Link
            to="article"
            smooth={true}
            offset={-70}
            duration= {500}
            spy={true}
          >
            <FontAwesomeIcon
              icon="angle-down"
            />
          </Link>
        </div>
      </div>
      <article
        id="article"
        className={styles.articleContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <section className={styles.relatedArticles}>
        <h2 className={styles.relatedTitle}>
          Artigos Relacionados
        </h2>
        <div className={`${theme.row} ${styles.relatedRow}`}>
          {
            relatedArticles
              .map((relatedPost, idx) => (
                <div
                  key={idx}
                  className={`${theme.column} ${theme.is4}`}
                >
                  <ArticlePreview
                    {...relatedPost}
                  />
                </div>
              ))
          }
        </div>
      </section>
    </AppWrapper>
  )
}

Post.getInitialProps = ({ query }) =>
  getPost(query.slug).then(post => ({ post }))