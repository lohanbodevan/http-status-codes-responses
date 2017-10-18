const HttpStatus = require('http-status-codes');

exports.notFound = (ctx, message) => {
    ctx.status = HttpStatus.NOT_FOUND;
    ctx.body = message || {message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)};
}

exports.internalServerError = (ctx, message) => {
    ctx.status = HttpStatus.INTERNAL_SERVER_ERROR;
    ctx.body = message || {message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)};
}
