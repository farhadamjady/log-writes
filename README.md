# Log Writes
This module is a simple logger, writes colorful and in-file logs.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save log-writer
```

levels:
    `info`
    `error`
    `warning`
    `fatal`
    
```js
var logger = require('log-writer');

logger.error('Log this error for me.');

logger.info('Log information for me.');

logger.warn('This is just a warning.');

logger.fatal( 'oops fatal error.', { console: true } );

logger.fatal( 'This fatal error will not appear anywhere.', { console: false, file: false } );

logger.fatal( 'This will be just written in fatal.log file.', { console: false, file: true } );

logger.fatal( 'This is just a cosole log.', { console: true, file: false } );
```

### Running tests
```sh
$ npm test
```
After running tests you can see logs in `logs` directory like this :

`
/*************** ERROR At Tue Apr 23 2019 12:30:18 GMT+0430 (Iran Daylight Time) miliseconds : 520 ***************/
Log this error for me.
/*************** ERROR At Tue Apr 23 2019 12:30:18 GMT+0430 (Iran Daylight Time) miliseconds : 520 ***************/
`

( This is error.log file )
### License

Released under the [MIT License](LICENSE).