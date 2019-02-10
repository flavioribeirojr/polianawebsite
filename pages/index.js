import React from 'react'
import Head from 'next/head';
import Home from './Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faBars, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './index.scss';

library.add(faAngleDown)
library.add(faBars)
library.add(faAngleLeft)
library.add(faAngleRight)

export default () => (
  <div>
    <Head>
      <title>Dra. Poliana</title>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <Home />
  </div>
)