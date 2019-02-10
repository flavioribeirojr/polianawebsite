import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderNav from '@/HeaderNav'
import styles from './Header.scss'
import { getScroll } from 'utils/scroll'

function Header() {
  const [isInverse, setInverse] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setInverse(getScroll().y > 50)
    })

    setInverse(getScroll().y > 50)
  })

  return (
    <header className={`${styles.header} ${isInverse && styles.inverse}`}>
      <h1 className={styles.title}>
        <a href="#">
          Dra. Poliana
        </a>
      </h1>
      <span
        className={`${styles['menu-toggler']} ${showMenu && styles.active}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          icon="bars"
        />
      </span>
      <HeaderNav
        inverse={isInverse}
        showMobileMenu={showMenu}
        onItemClick={toggleMenu}
      />
    </header>
  )
}

export default Header