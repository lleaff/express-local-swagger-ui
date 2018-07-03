import expressSwaggerUi from './express-swagger-ui';
import { Router } from 'express';
import { basename } from 'path';

export default function swaggerServer({ configFile, }: { configFile: string }) {
  const router = Router();

  const filename = basename(configFile);

  router.get(`/conf/${filename}`,
    (req, res) => res.sendFile(configFile));

  expressSwaggerUi({
    app: router,
    swaggerUrl: `conf/${filename}`,
    localPath: '/',
  });

  return router;
}
