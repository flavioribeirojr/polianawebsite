import React, { useState } from 'react'
import withNotification from '@/HOCS/Notification'
import Validator from 'domains/Newsletter/validator'
import styles from './Newsletter.scss'
import theme from 'pages/theme.scss'

const Newsletter = ({ displayNotification }) => {
  const [ email, setEmail ] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    Validator({ email }, (err) => {
      if (err) {
        return displayNotification({
          title: 'Atenção',
          message: 'Por favor, entre com email válido para assinar nossa Newsletter.',
          type: 'warning'
        })
      }
 
      displayNotification({
        title: 'Assinatura confirmada!',
        message: 'Muito obrigado por assinar nossa newsletter. Você terá notícias nossas em breve!',
        type: 'success'
      })
    })
  }
   
  return (
    <section id="newsletter" className={styles.newsletter}>
      <h1 className={styles.title}>Newsletter</h1>
      <h2 className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae quam temporibus debitis tempore aperiam quidem dolorem cum!
      </h2>
      <form onSubmit={onSubmit}>
        <div className={styles['input-box']}>
          <input
            type="text"
            name="newletter_email"
            placeholder="Digite o seu melhor email!"
            className={`${theme.input} ${theme.large} ${theme.textCenter}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button className={`${theme.button} ${theme.primary} ${theme.large}`} type="submit">
            Confirmar assinatura
          </button>
        </div>
      </form>
    </section>
  )
}

export default withNotification(Newsletter)