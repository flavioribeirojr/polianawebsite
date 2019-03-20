import React from 'react'
import ArticlePreview from '@/ArticlePreview'
import theme from 'pages/theme.scss'
import styles from './Articles.scss'

// const articles = [
//   {
//     title: 'Título do artigo',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate itaque placeat, labore consectetur ipsum ipsa unde id laudantium fugit iusto enim sint',
//     category: 'Categoria do artigo',
//     image: '/static/images/article_preview.jpg'
//   },
//   {
//     title: 'Título do artigo',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate itaque placeat, labore consectetur ipsum ipsa unde id laudantium fugit iusto enim sint',
//     category: 'Categoria do artigo',
//     image: '/static/images/article_preview-2.jpg'
//   },
//   {
//     title: 'Título do artigo',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate itaque placeat, labore consectetur ipsum ipsa unde id laudantium fugit iusto enim sint',
//     category: 'Categoria do artigo',
//     image: '/static/images/article_preview-3.jpg'
//   },
// ]

const Articles = ({ posts: articles }) => (
  <section id="articles" className={styles.articles}>
    <h1 className={theme.sectionTitle}>Artigos</h1>
    <h2 className={theme.sectionDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae quam temporibus debitis tempore aperiam quidem dolorem cum!</h2>
    <section className={styles.articlesPreview}>
      {
        articles
          .map((article, idx) => (
            <div className={styles.articlePreviewCard} key={idx}>
              <ArticlePreview
                {...article}
              />
            </div>
          ))
      }
    </section>
  </section>
)

export default Articles