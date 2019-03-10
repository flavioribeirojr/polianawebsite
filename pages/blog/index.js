import React, { useState, useEffect } from 'react'
import Dynamic from 'next/dynamic'
import AppWrapper from 'pages/AppWrapper'
import SpotlightArticlePreview from '@/SpotlightArticlePreview'
import { getCategories } from 'domains/Blog/Categories/service'
import styles from './Blog.scss'
import theme from 'pages/theme.scss'

const Header = Dynamic(import('@/Header'))

const posts = [
  {
    title: 'The life of a fisherman',
    description: 'Minima expedita sunt placeat dolore, aspernatur ullam! Libero veniam dolor vero. Harum, iste perferendis autem molestias obcaecati quis ipsum aut omnis repellat.',
    image: '/static/images/fisherman.jpg'
  },
  {
    title: 'Meet our city wonders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatibus suscipit eum veritatis enim sint quam distinctio facere at',
    image: '/static/images/houses.jpg'
  },
  {
    title: 'Meet our city wonders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatibus suscipit eum veritatis enim sint quam distinctio facere at',
    image: '/static/images/houses.jpg'
  }
]

const Blog = ({ categories }) => {
  return (
    <AppWrapper>
      <Header isHome={false} />
      <section className={styles.blog}>
        <h1 className={styles.title}>
          Artigos
        </h1>
        <nav>
          <ul className={styles.categories}>
            {
              categories
                .map((category, idx) => (
                  <li key={idx}>
                    { category.name }
                  </li>
                ))
            }
          </ul>
        </nav>
        <div className={`${theme.row} ${styles.articles}`}>
          <div className={`${theme.column} ${theme.is7}`}>
            <SpotlightArticlePreview
              {...posts[0]}
              showBig
            />
          </div>
          <div className={`${theme.column} ${theme.is4}`}>
            {
              posts
                .filter((_, idx) => idx !== 0)
                .map((post, idx) => (
                  <div className={`${theme.column} ${styles.tinyArticle}`}>
                    <SpotlightArticlePreview
                      key={idx}
                      {...post}
                    />
                  </div>
                ))
            }
          </div>
        </div>
      </section>
    </AppWrapper>
  )
}

Blog.getInitialProps = () => new Promise(resolve => (
  getCategories().then(categories => resolve({
    categories
  }))
))

export default Blog