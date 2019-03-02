import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Contact.scss'

const contacts = [
  {
    icon: 'whatsapp',
    label: '(98) 99999-9999',
    link: null,
    color: '#63fb74'
  },
  {
    icon: 'instagram',
    label: '@poliana',
    link: 'https://instagram.com/poliana',
    color: '#fc8b9e'
  },
  {
    icon: 'facebook',
    label: '@poliana',
    link: 'https://facebook.com/poliana',
    color: '#66a1f8'
  },
  {
    icon: 'envelope',
    label: 'poliana@email.com',
    link: null,
    notBrand: true,
    color: '#f2df8f'
  }
]

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <h1 className={styles.title}>
      Entre em contato
    </h1>
    <h2 className={styles.description}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </h2>
    <div className={styles.contacts}>
      {
        contacts
          .map((contact, idx) => (
            <a
              className={styles.contactItem}
              key={idx}
              target="_blank"
              {...(contact.link ? { href: contact.link } : {})}
            >
              <FontAwesomeIcon
                icon={
                  typeof contact.notBrand !== 'undefined' ?
                    contact.icon :
                    ['fab', contact.icon]
                }
                style={{ color: contact.color }}
              />
              <span className={styles.label}>
                { contact.label }
              </span>
            </a>
          ))
      }
    </div>
  </section>
)

export default Contact