import fastifySwagger from '@fastify/swagger';
import fastify from 'fastify';
import { swaggerOptions } from './docs/swaggerOptions';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { fastifySwaggerUiOptions } from './docs/swaggetUoOptions';
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';
import { userRoutes } from './routes/userRoute';
import fastifyHelmet from '@fastify/helmet';
import fastifyRateLimit from '@fastify/rate-limit';
import fastifyJwt from '@fastify/jwt';
import { env } from './config/envSchema';
import { handlerGlobalErros } from './errors/handlerGlobalErrors';
import { teacherRoutes } from './routes/teacherRoute';

export const app = fastify();

app.register(fastifyHelmet);
app.register(fastifyRateLimit, {
  max: 50,
  timeWindow: '1 minute',
});
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '10m',
  },
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, fastifySwaggerUiOptions);

app.setErrorHandler(handlerGlobalErros);
app.register(userRoutes);
app.register(teacherRoutes);
