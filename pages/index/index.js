import React from 'react'
import styles from './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll'
import Depositions from './Sections/Depositions'
import Newsletter from './Sections/Newsletter'
import Articles from './Sections/Articles'
import Benefits from './Sections/Benefits'
import Contact from './Sections/Contact'
import InstagramFeed from './Sections/InstagramFeed'
import AppWrapper from 'pages/AppWrapper'
import { getPosts } from 'domains/Blog/service'

const Home = ({ posts }) => (
  <AppWrapper
    isHome
    controlScroll
  >
    <>
      <section id="home" className={styles.home}>
        <section className={styles.body}>
          <h1 className={styles.description}>Lorem ipsum dolor sit amet</h1>
          <p className={styles['description-subtitle']}>
            Curabitur ac ex eu nisl blandit rhoncus. Duis posuere eleifend nibh, in pulvinar elit vestibulum quis. Vivamus sed dolor sit amet lorem efficitur facilisis.
          </p>
        </section>
        <div className={styles.footer}>
          <Link
            to="benefits"
            smooth={true}
            offset={-70}
            duration= {500}
            spy={true}
          >
            <FontAwesomeIcon icon="angle-down" />
          </Link>
        </div>
      </section>
      <Benefits />
      <Newsletter />
      <Depositions />
      <Contact />
      <InstagramFeed />
      <Articles posts={posts} />
    </>
  </AppWrapper>
)

Home.getInitialProps = () =>
  getPosts().then(posts => ({ posts: posts.slice(0, 3) }))

export default Home