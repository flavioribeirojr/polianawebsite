import React, { useState, useEffect } from 'react'
import { getFeed } from 'domains/Instagram/service'
import GalleryItem from '@/GalleryItem'
import Lightbox from 'react-image-lightbox'
import styles from './InstagramFeed.scss'
import theme from 'pages/theme.scss'

const InstagramFeed = () => {
  const [feed, setFeed] = useState([])
  const [feedSources, setFeedSources] = useState([])
  const [showFullscreen, setShowFullscreen] = useState(false)
  const [imageSelected, setImageSelected] = useState(0)

  useEffect(() => {
    if (feed.length) return

    getFeed().then(feed => {
      setFeed(feed)
      setFeedSources(feed.map(media => media.images.standard_resolution.url))
    })
  })

  return (
    <section id="gallery" className={styles.gallery}>
      <h1 className={theme.sectionTitle}>GALERIA</h1>
      <div className={styles.instagramGallery}>
        {
          feed.length > 0 &&
          feed
            .map((media, idx) => (
              <GalleryItem
                key={idx}
                source={media.images.standard_resolution.url}
                caption={media.caption ? media.caption.text : ''}
                onClick={() => {
                  setImageSelected(idx)
                  setShowFullscreen(true)
                }}
              />
            ))
        }
      </div>
      {
        showFullscreen && (
          <Lightbox
            mainSrc={feedSources[imageSelected]}
            nextSrc={feedSources[imageSelected + 1]}
            prevSrc={feedSources[imageSelected - 1]}
            onCloseRequest={() => setShowFullscreen(false)}
            onMovePrevRequest={() => setImageSelected(imageSelected - 1)}
            onMoveNextRequest={() => setImageSelected(imageSelected + 1)}
          />
        )
      }
    </section>
  )
}

export default InstagramFeed