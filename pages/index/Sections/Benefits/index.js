import React from 'react'
import Benefit from '@/Benefit'
import theme from 'pages/theme.scss'
import styles from './Benefits.scss'

const benefits = [
  {
    title: 'Sinta-se acolhido',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/static/images/welcome.png'
  },
  {
    title: 'Encontre o que procura',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/static/images/looking.png'
  },
  {
    title: 'Mantenha a calma',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/static/images/meditation.png'
  }
]

const getBenefitPosition = (num) => (
  (num === 0 || num % 2 === 0) ? 'left' : 'right'
)

const Benefits = () => (
  <section id="benefits" className={styles.benefits}>
    <h1 className={theme.sectionTitle}>Benefícios para você</h1>
    <div>
      {
        benefits
          .map((benefit, idx) => (
            <Benefit
              {...benefit}
              key={idx}
              position={getBenefitPosition(idx)}
            />
          ))
      }
    </div>
  </section>
)

export default Benefits