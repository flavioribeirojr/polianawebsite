import React from 'react'
import { toast } from 'react-toastify'
import NotificationMessage from '@/NotificationMessage'
import styles from './Notification.scss'

const withNotification = (Component) =>
  (props) => {
    const displayNotification = ({
      title,
      message,
      type
    }) => (
      toast[type](<NotificationMessage title={title} message={message} />, {
        ...(type === 'success' ? { className: styles['notification-success-body'] } : {})
      })
    )

    return (
      <Component displayNotification={displayNotification} {...props} />
    )
  }

export default withNotification