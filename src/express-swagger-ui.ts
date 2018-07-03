/*!
 * express-swagger-ui <https://github.com/AndreasPizsa/express-swagger-ui>
 *
 * Copyright (c) 2016, Andreas Pizsa.
 * Licensed under the MIT License.
 */
import express = require('express');
import fs = require('fs');
import {
  getAbsoluteFSPath as getAbsoluteSwaggerUiFSPath,
} from 'swagger-ui-dist';
import path = require('path');


export default function initializeExpressUi({
  app,
  swaggerUrl='/swagger.json',
  localPath='/explorer',
  html,
  validatorUrl,
}: {
  app: express.Application | express.Router,
  swaggerUrl?: string,
  localPath?: string,
  html?: string,
  validatorUrl?: string,
}): void {
  if(!app) {
    throw new TypeError('options.app is required and must be an Express app or router object.');
  }

  const swaggerUiPath = getAbsoluteSwaggerUiFSPath();

  if(!html) {
    html = fs
      .readFileSync(path.join(swaggerUiPath,'index.html'),{encoding:'utf-8'})
      .replace('http://petstore.swagger.io/v2/swagger.json', swaggerUrl)
      .replace('</title>', '</title><base href="' + localPath + '/">');

    // Set validatorUrl to null or string if set
    if (validatorUrl) {
      html = html
      .replace('new SwaggerUi({',
        `new SwaggerUi({ validatorUrl: ${(validatorUrl ? ('"' + validatorUrl + '"') : null)},`);
    }
  }

  function serveSwaggerUi(req, res, next)
  {
    return /^\/?$/.test(req.path)
      ? res.status(200).send(html)
      : next();
  };

  app
    .use(localPath, serveSwaggerUi)
    .use(localPath, express.static(swaggerUiPath));
};
