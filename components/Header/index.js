import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderNav from '@/HeaderNav'
import styles from './Header.scss'
import { getScroll } from 'utils/scroll'

function Header({ isHome }) {
  const [isInverse, setInverse] = useState(!isHome)
  const [showMenu, setShowMenu] = useState(false)

  const changeTheme = (scrolledEnough) => {
    if (isHome) {
      setInverse(scrolledEnough)
    }
  }

  const toggleMenu = () => setShowMenu(!showMenu)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      changeTheme(getScroll().y > 50)
    })

    changeTheme(getScroll().y > 50)
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
        isHome={isHome}
      />
    </header>
  )
}

Header.defaultProps = {
  isHome: true
}

export default Header