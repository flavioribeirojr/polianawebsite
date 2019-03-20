import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeaderNav from '@/HeaderNav'
import styles from './Header.scss'
import { getScroll } from 'utils/scroll'

function Header({ isHome, controlScroll }) {
  const [isInverse, setInverse] = useState(controlScroll)
  const [showMenu, setShowMenu] = useState(false)

  const changeTheme = (scrolledEnough) => {
    if (controlScroll) {
      setInverse(scrolledEnough)
    }
  }

  const toggleMenu = () => setShowMenu(!showMenu)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('foi')
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
  isHome: true,
  controlScroll: false
}

export default Header