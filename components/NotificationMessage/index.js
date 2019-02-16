import React from 'react'
import styles from './NotificationMessage.scss'

const NotificationMessage = ({ title, message }) => (
  <div className={styles.notification}>
    <h1 className={styles.title}>{ title }</h1>
    <h3 className={styles.description}>{ message }</h3>
  </div>
)

export default NotificationMessage