import { FastifyInstance, fastify } from 'fastify';
import { financeRoutes } from './routes/finance.routes';
import { categoryRoutes } from './routes/category.routes';

const server: FastifyInstance = fastify({logger: true});

server.register(financeRoutes, {prefix: '/finance'})
server.register(categoryRoutes, {prefix: '/category'})


server.listen({ port: 3001 }, () => {
  console.log("SERVER RUNNING")
});
