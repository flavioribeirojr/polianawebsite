import React, { useEffect, useState } from 'react'
import HeaderNav from '@/HeaderNav'
import styles from './Header.scss'
import { getScroll } from 'utils/scroll'

function Header() {
  const [isInverse, setInverse] = useState(false)

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
      <HeaderNav inverse={isInverse} />
    </header>
  )
}

export default Header