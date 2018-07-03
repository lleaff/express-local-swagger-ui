# express-swagger-ui-router [![NPM version](https://badge.fury.io/js/express-swagger-ui-router.svg)](http://badge.fury.io/js/express-swagger-ui-router)

Cleanly serve `swagger-ui` and a local [openapi](https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v3.0) configuration file.

## Installation
```bash
npm install --save express-swagger-ui-router
# Install peer dependencies
npm install --save swagger-ui express 
```

## Usage

This module exports a single function with a `configFile` parameter which takes the path to a local `openapi` configuration file. It returns an [`express.Router`](https://expressjs.com/en/api.html#express.router) instance which can be mounted at any desired path.

```javascript
import express from 'express';
import path from 'path';
import swaggerServer from 'express-swagger-ui-router';

const app = express();

app.use('/swagger',
  swaggerServer({ configFile: path.resolve(__dirname, 'openapi.json') }));

app.listen(3000);

// Access swagger-ui at localhost:3000/swagger
```

* Forked from [express-swagger-ui](https://github.com/AndreasPizsa/express-swagger-ui) by Andreas Pizsa ([github/AndreasPizsa](https://github.com/AndreasPizsa), [twitter/AndreasPizsa](http://twitter.com/AndreasPizsa)).