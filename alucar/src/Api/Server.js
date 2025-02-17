import { fastify } from 'fastify'
import { addUser, getUsers } from './ApiUsers.js'

const server = fastify({ logger: true })

// Define uma rota GET na raiz
server.get('/', async (request, reply) => {
  return { message: 'Servidor Fastify rodando!' };
});

server.get('/users', async () => {
  return getUsers()
})

server.post('/users', async (request, reply) => {
  const user = await request.body
  try {
    addUser(user)
    return reply.status(201).send()
  } catch(error) {
    console.error(error)
  }
})

// Inicia o servidor
const start = async () => {
  try {
    await server.listen({ port: 3333, host: '127.0.0.1' });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
