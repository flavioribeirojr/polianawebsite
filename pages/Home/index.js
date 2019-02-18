import React from 'react'
import Dynamic from 'next/dynamic'
import styles from './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll'
import Depositions from './Sections/Depositions'
import Newsletter from './Sections/Newsletter'
import Articles from './Sections/Articles'

const Header = Dynamic(import('@/Header'))

const Home = () => (
  <section>
    <Header />
    <section id="home" className={styles.home}>
      <section className={styles.body}>
        <h1 className={styles.description}>Lorem ipsum dolor sit amet</h1>
        <p className={styles['description-subtitle']}>
          Curabitur ac ex eu nisl blandit rhoncus. Duis posuere eleifend nibh, in pulvinar elit vestibulum quis. Vivamus sed dolor sit amet lorem efficitur facilisis.
        </p>
      </section>
      <div className={styles.footer}>
        <Link
          to="depositions"
          smooth={true}
          offset={-70}
          duration= {500}
          spy={true}
        >
          <FontAwesomeIcon icon="angle-down" />
        </Link>
      </div>
    </section>
    <Depositions />
    <Newsletter />
    <Articles />
  </section>
)

export default Home