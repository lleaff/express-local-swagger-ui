# express-swagger-ui [![NPM version](https://badge.fury.io/js/express-swagger-ui.svg)](http://badge.fury.io/js/express-swagger-ui)

> Serve swagger-ui with express.js (without hacking `node_modules/swagger-ui/dist/index.html`)

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i express-swagger-ui --save
```

### (optional) Install peer dependencies

```bash
npm i -S express swagger-ui
```

## Usage

```js
const express = require('express');
const app = express();
require('express-swagger-ui')({
  app       : app,
  swaggerUrl: '/swagger.json',  // this is the default value
  localPath : '/explorer'       // this is the default value
});
```

## API

<!-- add a path or glob pattern for files with code comments to use for docs  -->
{%= apidocs("index.js") %}

## Related projects

<!-- add an array of related projects, then un-escape the helper -->
{%= related([]) %}

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/AndreasPizsa/express-swagger-ui/issues/new).

## Author

**Andreas Pizsa**

+ [github/AndreasPizsa](https://github.com/AndreasPizsa)
+ [twitter/AndreasPizsa](http://twitter.com/AndreasPizsa)

## License

Copyright © 2016 Andreas Pizsa
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on April 06, 2016._