import React from 'react'
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faBars, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import './index.scss';

library.add(faAngleDown)
library.add(faBars)
library.add(faAngleLeft)
library.add(faAngleRight)

export default ({ children }) => (
  <div>
    <Head>
      <title>Dra. Poliana</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/ReactToastify.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/ReactLightbox.css" />
    </Head>
    <ToastContainer />
    { children }
  </div>
)