import React from 'react'
import styles from './HeaderNav.scss';

const HeaderNav = ({ inverse, showMobileMenu }) => (
  <nav className={`${inverse && styles.inverse} ${ showMobileMenu && styles['show-mobile-menu'] }`}>
    <ul className={styles.links}>
      <li>
        <a href="#" className={styles.active}>
          Início
        </a>
      </li>
      <li>
        <a href="#">
          Depoimentos
        </a>
      </li>
      <li>
        <a href="#">
          Artigos
        </a>
      </li>
      <li>
        <a href="#">
          Contato
        </a>
      </li>
    </ul>
  </nav>
)

export default HeaderNav