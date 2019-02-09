import React from 'react'
import styles from './Home.scss'
import HeaderNav from '@/HeaderNav'

const Home = () => (
  <section className={styles.home}>
    <section className={styles.header}>
      <h1 className={styles.title}>
        Dra. Poliana
      </h1>
      <HeaderNav />
    </section>
  </section>
)

export default Home