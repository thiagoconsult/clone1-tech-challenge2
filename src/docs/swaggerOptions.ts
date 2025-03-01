import { SwaggerOptions } from '@fastify/swagger';
import { jsonSchemaTransform } from 'fastify-type-provider-zod';

export const swaggerOptions: SwaggerOptions = {
  openapi: {
    openapi: '3.1.0',
    info: {
      title: 'BLOG Api',
      description: 'Blog API',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'development',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
  },
  transform: jsonSchemaTransform,
};
