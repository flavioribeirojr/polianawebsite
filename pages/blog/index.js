import React, { useState, useEffect } from 'react'
import Dynamic from 'next/dynamic'
import AppWrapper from 'pages/AppWrapper'
import SpotlightArticlePreview from '@/SpotlightArticlePreview'
import ArticlePreview from '@/ArticlePreview';
import { getCategories } from 'domains/Blog/Categories/service'
import { getPosts } from 'domains/Blog/service'
import styles from './Blog.scss'
import theme from 'pages/theme.scss'

const Blog = ({ categories, posts: initialPosts }) => {
  const [ posts, setPosts ] = useState(initialPosts);

  const filterPosts = (categoryId) =>
    getPosts(categoryId)
      .then(posts => setPosts(posts))

  return (
    <AppWrapper controlScroll={false} inverse>
      <section className={styles.blog}>
        <h1 className={styles.title}>
          Artigos
        </h1>
        <nav>
          <ul className={styles.categories}>
            <li onClick={() => filterPosts(null)}>
              Todos
            </li>
            {
              categories
                .map((category, idx) => (
                  <li
                    key={idx}
                    onClick={() => filterPosts(category.id)}
                  >
                    { category.name }
                  </li>
                ))
            }
          </ul>
        </nav>
        {
          posts.length > 0 && (
            <>
              <div className={`${theme.row} ${styles.articles} ${ posts.length === 1 && styles.isOnlyOne }`}>
                <div
                  className={`${theme.column} ${theme.is7} ${styles.bigPost}`}>
                  <SpotlightArticlePreview
                    {...posts[0]}
                    showBig
                  />
                </div>
                {
                  posts.length > 1 && (
                    <div className={`${theme.column} ${theme.is4}`}>
                      {
                        posts
                          .slice(1, 3)
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
                  )
                }
              </div>
              {
                posts.length > 3 && (
                  <div className={styles.oldArticles}>
                    <hr />
                    <div className={theme.row}>
                      {
                        posts
                          .slice(3)
                          .map((post, idx) => (
                            <div
                              key={idx}
                              className={`${styles.oldPost} ${theme.column} ${theme.is4}`}
                            >
                              <ArticlePreview
                                {...post}
                              />
                            </div>
                          ))
                      }
                    </div>
                  </div>
                )
              }
            </>
          )
        }
      </section>
    </AppWrapper>
  )
}

Blog.getInitialProps = () => new Promise(resolve => (
  getCategories().then(categories => 
    getPosts()
      .then(posts => resolve({
        posts,
        categories
      }))
  )
))

export default Blog