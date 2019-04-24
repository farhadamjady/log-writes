const fs = require('fs');
const LOG_DIR = 'logs';
const COLORS =
{
    info: '\x1b[32m%s\x1b[0m',
    error: '\x1b[31m%s\x1b[0m',
    warning: '\x1b[33m%s\x1b[0m',
    fatal: '\x1b[35m%s\x1b[0m'
}

/**
 * This moduel is a wrapper for logging
 *
 * @param  {mixed} data
 * @return void
 */
module.exports =
{
    /**
     * Log additional info
     *
     * @param  {string} data
     * @return {void}
     */
    info: function( data, options = {} )
    {
        this.loggString( 'INFO', data, COLORS.info, options );
    },

    /**
     * Log Errors
     *
     * @param  {string} data
     * @return {void}
     */
    error: function( data, options = {} )
    {
        this.loggString( 'ERROR', data, COLORS.error, options );
    },

    /**
     * Log Warnings
     *
     * @param  {string} data
     * @return {void}
     */
    warn: function( data, options = {} )
    {
        this.loggString( 'WARNING', data, COLORS.warning, options );
    },

    /**
     * Log Fatal error
     *
     * @param  {string} data
     * @return {void}
     */
    fatal: function( data, options = {} )
    {
        this.loggString( 'FATAL', data, COLORS.fatal, options );
    },

    /**
     * Execute logging
     *
     * @param  {string} data
     * @param  {string} label
     * @return {void}
     */
    loggString: function( label, data, color, options )
    {
        var d, str, line, filePath;

        options.console = ( typeof options.console === 'undefined' ? true : options.console );
        options.file = ( typeof options.file === 'undefined' ? true : options.file );

        if( typeof data === 'object' )
            data = JSON.stringify(data);

        d = new Date();
        str = '';
        line = '\n/*************** ' + label.toUpperCase() + ' At ' + d + ' miliseconds : ' + d.getMilliseconds() + ' ***************/\n';
        str += line;
        str += data;
        str += line;

        if( options.file )
        {
            if ( !fs.existsSync(`./${LOG_DIR}`) )
            {
                fs.mkdirSync(`./${LOG_DIR}`);
            }

            filePath = `/${LOG_DIR}/` + label.toLowerCase() + `.log`;

            fs.appendFileSync( __dirname + filePath, str );
        }

        if( options.console )
            console.log( color, data );
    }
}