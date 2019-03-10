const posts = [
  {
    title: 'The life of a fisherman',
    description: 'Minima expedita sunt placeat dolore, aspernatur ullam! Libero veniam dolor vero. Harum, iste perferendis autem molestias obcaecati quis ipsum aut omnis repellat.',
    image: '/static/images/fisherman.jpg',
    category_id: 1
  },
  {
    title: 'Meet our city wonders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatibus suscipit eum veritatis enim sint quam distinctio facere at',
    image: '/static/images/houses.jpg',
    category_id: 1
  },
  {
    title: 'Meet our city wonders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatibus suscipit eum veritatis enim sint quam distinctio facere at',
    image: '/static/images/houses.jpg',
    category_id: 3
  },
  {
    title: 'The life of a fisherman',
    description: 'Minima expedita sunt placeat dolore, aspernatur ullam! Libero veniam dolor vero. Harum, iste perferendis autem molestias obcaecati quis ipsum aut omnis repellat.',
    image: '/static/images/fisherman.jpg',
    category_id: 4
  },
  {
    title: 'Meet our city wonders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatibus suscipit eum veritatis enim sint quam distinctio facere at',
    image: '/static/images/houses.jpg',
    category_id: 2
  },
  {
    title: 'Meet our city wonders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatibus suscipit eum veritatis enim sint quam distinctio facere at',
    image: '/static/images/houses.jpg',
    category_id: 3
  }
]

export const getPosts = (category = null) =>
  new Promise(resolve => setTimeout(() => {
    resolve(category ? posts.filter(post => post.category_id === category) : posts)
  }, 1000))