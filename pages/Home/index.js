import React from 'react'
import styles from './Home.scss'
import HeaderNav from '@/HeaderNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Depositions from './Sections/Depositions'

const Home = () => (
  <section>
    <section className={styles.home}>
      <section className={styles.header}>
        <h1 className={styles.title}>
          Dra. Poliana
        </h1>
        <HeaderNav />
      </section>
      <section className={styles.body}>
        <h1 className={styles.description}>Lorem ipsum dolor sit amet</h1>
        <p className={styles['description-subtitle']}>
          Curabitur ac ex eu nisl blandit rhoncus. Duis posuere eleifend nibh, in pulvinar elit vestibulum quis. Vivamus sed dolor sit amet lorem efficitur facilisis.
        </p>
      </section>
      <div className={styles.footer}>
        <button>
          <FontAwesomeIcon icon="angle-down" />
        </button>
      </div>
    </section>
    <Depositions />
  </section>
)

export default Home