import React, { Fragment } from 'react'
import styles from './Depositions.scss'
import Slider from 'react-slick'
import Card from '@/Card'
import { CarouselDots, CarouselArrows } from '@/Carousel'

const carousel = {
  autoplay: true,
  autoplaySpeed: 14000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  appendDots: CarouselDots,
  nextArrow: <CarouselArrows icon="angle-right" />,
  prevArrow: <CarouselArrows icon="angle-left" />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
}

const CardHeader = () => (
  <Fragment>
    <img src="/static/images/bernardo.jpg" />
    <h1 className={styles.name}>
      Bernardo Lopes
    </h1>
  </Fragment>
)

const CardBody = () => (
  <blockquote className={styles.text}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </blockquote>
)

const Depositions = () => (
  <section className={styles.depositions} id="depositions">
    <h1 className={styles.title}>Depoimentos</h1>
    <h2 className={styles.subtitle}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </h2>
    <div className={styles.cards}>
      <Slider {...carousel}>
        {
          [0, 1, 2, 3].map((_, idx) => (
            <div className={styles.item} key={idx}>
              <Card
                Header={CardHeader}
                Body={CardBody}
              />
            </div>
          ))
        }
      </Slider>
    </div>
  </section>
)

export default Depositions