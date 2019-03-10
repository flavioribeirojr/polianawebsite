const categories = [
  {
    id: 1,
    name: 'Bem estar'
  },
  {
    id: 2,
    name: 'Profissional'
  },
  {
    id: 3,
    name: 'Formação acadêmica'
  },
  {
    id: 4,
    name: 'Saúde mental'
  }
]

export const getCategories = () =>
  new Promise(resolve => setTimeout(() => (
    resolve(categories)
  ), 1000))