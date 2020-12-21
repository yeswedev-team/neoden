import sanityClient from '@sanity/client'
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

export default client
