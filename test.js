let logger = require('./');

logger.error('Log this error for me.');
logger.info('Log information for me.');
logger.warn('This is just a warning.');
logger.fatal( 'oops fatal error.', { console: true } );
logger.fatal( 'This fatal error will not appear anywhere.', { console: false, file: false } );
logger.fatal( 'This will be just written in fatal.log file.', { console: false, file: true } );
logger.fatal( 'This is just a cosole log.', { console: true, file: false } );