import React, { useContext } from 'react'
import { SpinnerContext } from './Provider'
import styles from './Spinner.scss'

export default function Spinner() {
  const { showSpinner } = useContext(SpinnerContext)

  if (!showSpinner) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        Loading...
      </div>
    </div>
  )
}