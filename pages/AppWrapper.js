import React from 'react'
import Head from 'next/head'
import Dynamic from 'next/dynamic'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  faBars,
  faAngleLeft,
  faAngleRight,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
  faWhatsapp,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { ToastContainer } from 'react-toastify'
import Spinner from '@/Spinner'
import './index.scss'
import styles from './index.scss'
import Footer from '@/Footer'

const Header = Dynamic(() => import('@/Header'))

library.add(faAngleDown)
library.add(faBars)
library.add(faAngleLeft)
library.add(faAngleRight)
library.add(faEnvelope)
library.add(faWhatsapp)
library.add(faInstagram)
library.add(faFacebook)

const AppWrapper = ({
  title,
  isHome,
  controlScroll,
  children
}) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/ReactToastify.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/ReactLightbox.css" />
    </Head>
    <ToastContainer />
    <Spinner />
    <Header
      isHome={isHome}
      controlScroll={controlScroll}
    />
    <div className={!controlScroll ? styles.wrapper : ''}>
      { children }
    </div>
    <Footer />
  </div>
)

AppWrapper.defaultProps = {
  title: 'Dra. Poliana',
  isHome: false,
  controlScroll: false
}

export default AppWrapper