import { get } from 'domains/request'

const instaAccessToken = '1929721706.c5e00ac.9914a97284594c37b4211f13efd2cc2d'
const postLimit = 6

/**
 * Get instagram feed
 * 
 * @return { Promise } the feed
 */
export const getFeed = () => (
  get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${instaAccessToken}&count=${postLimit}`)
    .then(res => res.data.data)
)