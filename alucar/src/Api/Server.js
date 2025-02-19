import { fastify } from 'fastify'
import { addUser, getUsers } from './userService.js'
import cors from '@fastify/cors'

const server = fastify({ logger: true });

await server.register(cors, {
  origin: "*",
  methods: ["GET", "POST"] // Permite requisições do frontend
});

// Define uma rota GET na raiz
server.get('/', async (request, reply) => {
  return { message: 'Servidor Fastify rodando!' };
});

server.get('/users', async (request, reply) => {
  return getUsers()
})

server.post('/users', async (request, reply) => {
  const user = await request.body
  try {
    await addUser(user)
    return reply.status(201).send({ message: "Usuário criado com sucesso" })
  } catch(error) {
    return reply.status(400).send({ error: error.message })
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
