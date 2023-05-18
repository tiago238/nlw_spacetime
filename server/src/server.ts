import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
app.register(memoriesRoutes)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server running on http://localhost:3333')
  })
