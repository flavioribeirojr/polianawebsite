import React from 'react'
import AppWrapper from 'pages/AppWrapper'
import { getPost } from 'domains/Blog/service'

export default function Post({ post }) {
  return (
    <AppWrapper>
      <h1>
        { post.title }
      </h1>
    </AppWrapper>
  )
}

Post.getInitialProps = ({ query }) =>
  getPost(query.slug).then(post => ({ post }))