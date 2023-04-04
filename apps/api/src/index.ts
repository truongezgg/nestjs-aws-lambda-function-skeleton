require('dotenv').config();
import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import * as express from 'express';
import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'aws-lambda';

export async function bootstrapApi(listen = false): Promise<Handler> {
  const app = await NestFactory.create(ApiModule);
  app.enableCors();
  app.use(helmet());
  app.use(express.json({ limit: '10mb' }));

  if (listen) await app.listen(3000);
  if (!listen) await await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  /**
   * f you are behind a proxy/load balancer (usually the case with most hosting services,
   * e.g.Heroku, Bluemix, AWS ELB, Nginx, Cloudflare, Akamai, Fastly, Firebase Hosting, Rackspace LB, Riverbed Stingray, etc.),
   * the IP address of the request might be the IP of the load balancer/reverse proxy
   * (making the rate limiter effectively a global one and blocking all requests once the limit is reached) or undefined.
   * To solve this issue, add the following line to your code (right after you create the express application):
   * https://github.com/express-rate-limit/express-rate-limit#troubleshooting-proxy-issues
   */
  expressApp.set('trust proxy', 1);

  return serverlessExpress({ app: expressApp });
}
