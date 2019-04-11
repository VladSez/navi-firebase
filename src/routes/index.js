import React from 'react'
import { mount, route } from 'navi'
import Kalgan from '../components/Kalgan'

async function getUsers() {
  const photosRes = await fetch(
    'https://api.unsplash.com/photos/?client_id=b54dca45caab83d434a3ff854cbcb00e43bfd22eb2941d6b0c3ef31c2e9777fd&per_page=10',
  )
  const photos = await photosRes.json()

  const usersRes = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await usersRes.json()
  return { users, photos }
}

export default mount({
  '/': route({
    title: 'Home',
    head: (
      <>
        <meta name="description" content="And example app" />
      </>
    ),
    getView: () => import('./index.mdx'),
  }),

  '/about': route({
    title: 'About',
    getView: async () => {
      // This simulates some async content loading, so that
      // you can test the site's loading bar.
      await new Promise(resolve => setTimeout(resolve, 500))

      return import('./about.mdx')
    },
  }),
  '/kalgan': route({
    title: 'Kalgan',
    getView: async () => {
      try {
        return <Kalgan data={await getUsers()} name="hello" />
      } catch (error) {
        return <Kalgan error={error} />
      }
    },
  }),
})
