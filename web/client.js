import sanityClient from '@sanity/client'
const client = sanityClient({
  projectId: '1fcdf5t0',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

export default client
