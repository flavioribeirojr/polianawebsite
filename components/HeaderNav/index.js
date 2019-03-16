import React from 'react'
import { Link } from 'react-scroll'
import styles from './HeaderNav.scss'

const navigation = [
  {
    to: 'home',
    name: 'Início'
  },
  {
    to: 'benefits',
    name: 'Benefícios'
  },
  {
    to: 'depositions',
    name: 'Depoimentos'
  },
  {
    to: 'contact',
    name: 'Contato'
  },
  {
    to: 'gallery',
    name: 'Galeria'
  },
  {
    to: 'articles',
    name: 'Artigos'
  }
]

const HeaderNav = ({
  inverse,
  showMobileMenu,
  isHome,
  onItemClick
}) => (
  <nav className={`${styles.headerNav} ${inverse && styles.inverse} ${ showMobileMenu && styles['show-mobile-menu'] }`}>
    <ul className={styles.links}>
      {
        navigation
          .map(({ to, name }, idx) => (
            <li key={idx}>
              <Link
                hashSpy
                activeClass={styles.active}
                to={to}
                smooth={true}
                offset={-70}
                duration= {500}
                spy={true}
                onClick={() => isHome ? onItemClick() : window.location.replace(`/#${to}`)}
                href={`/#${to}`}                
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