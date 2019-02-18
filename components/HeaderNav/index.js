import React from 'react'
import { Link } from 'react-scroll'
import styles from './HeaderNav.scss'

const navigation = [
  {
    to: 'home',
    name: 'Início'
  },
  {
    to: 'depositions',
    name: 'Depoimentos'
  },
  {
    to: 'articles',
    name: 'Artigos'
  },
  {
    to: '',
    name: 'Contato'
  }
]

const HeaderNav = ({ inverse, showMobileMenu, onItemClick }) => (
  <nav className={`${inverse && styles.inverse} ${ showMobileMenu && styles['show-mobile-menu'] }`}>
    <ul className={styles.links}>
      {
        navigation
          .map(({ to, name }, idx) => (
            <li key={idx}>
              <Link
                activeClass={styles.active}
                to={to}
                smooth={true}
                offset={-70}
                duration= {500}
                spy={true}
                onClick={() => onItemClick()}
              >
                { name }
              </Link>
            </li>
          ))
      }
    </ul>
  </nav>
)

export default HeaderNav