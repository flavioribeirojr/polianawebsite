import React from 'react'
import styles from './Card.scss'

const Card = ({ Header, Body }) => (
  <div className={styles.card}>
    <header>
      <Header />
    </header>
    <div>
      <Body />
    </div>
  </div>
)

export default Card