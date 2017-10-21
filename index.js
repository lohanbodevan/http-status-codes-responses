const HttpStatus = require('http-status-codes');

const build = status => {
    return (ctx, message) => {
        ctx.status = status
        ctx.body = message || {message: HttpStatus.getStatusText(status)}
        return ctx
    }
}

module.exports = {
    accepted: build(HttpStatus.ACCEPTED), // 202 
    badGateway: build(HttpStatus.BAD_GATEWAY), // 502
    badRequest: build(HttpStatus.BAD_REQUEST), // 400
    conflict: build(HttpStatus.CONFLICT), // 409
    continue: build(HttpStatus.CONTINUE), // 100
    created: build(HttpStatus.CREATED), // 201
    expectationFailed: build(HttpStatus.EXPECTATION_FAILED), // 417
    failedDependency: build(HttpStatus.FAILED_DEPENDENCY), // 424
    forbidden: build(HttpStatus.FORBIDDEN), // 403
    gatewayTimeout: build(HttpStatus.GATEWAY_TIMEOUT), // 504
    gone: build(HttpStatus.GONE), // 410
    httpVersionNotSupported: build(HttpStatus.HTTP_VERSION_NOT_SUPPORTED), // 505
    imATeapot: build(HttpStatus.IM_A_TEAPOT), // 418
    insufficientSpaceOnResource: build(HttpStatus.INSUFFICIENT_SPACE_ON_RESOURCE), // 419
    insufficientStorage: build(HttpStatus.INSUFFICIENT_STORAGE), // 507
    internalServerError: build(HttpStatus.INTERNAL_SERVER_ERROR), // 500
    lengthRequired: build(HttpStatus.LENGTH_REQUIRED), // 411
    locked: build(HttpStatus.LOCKED), // 423
    methodFailure: build(HttpStatus.METHOD_FAILURE), // 420
    methodNotAllowed: build(HttpStatus.METHOD_NOT_ALLOWED), // 405
    movedPermanently: build(HttpStatus.MOVED_PERMANENTLY), // 301
    movedTemporarily: build(HttpStatus.MOVED_TEMPORARILY), // 302
    multiStatus: build(HttpStatus.MULTI_STATUS), // 207
    multipleChoices: build(HttpStatus.MULTIPLE_CHOICES), // 300
    networkAuthenticationRequired: build(HttpStatus.NETWORK_AUTHENTICATION_REQUIRED), // 511
    noContent: build(HttpStatus.NO_CONTENT), // 204
    nonAuthoritativeInformation: build(HttpStatus.NON_AUTHORITATIVE_INFORMATION), // 203
    notAcceptable: build(HttpStatus.NOT_ACCEPTABLE), // 406
    notFound: build(HttpStatus.NOT_FOUND), // 404
    notImplemented: build(HttpStatus.NOT_IMPLEMENTED), // 501
    notModified: build(HttpStatus.NOT_MODIFIED), // 304
    ok: build(HttpStatus.OK), // 200
    partialContent: build(HttpStatus.PARTIAL_CONTENT), // 206
    paymentRequired: build(HttpStatus.PAYMENT_REQUIRED), // 402
    permanentRedirect: build(HttpStatus.PERMANENT_REDIRECT), // 308
    preconditionFailed: build(HttpStatus.PRECONDITION_FAILED), // 412
    preconditionRequired: build(HttpStatus.PRECONDITION_REQUIRED), // 428
    processing: build(HttpStatus.PROCESSING), // 102
    proxyAuthenticationRequired: build(HttpStatus.PROXY_AUTHENTICATION_REQUIRED), // 407
    requestHeaderFieldsTooLarge: build(HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE), // 431
    requestTimeout: build(HttpStatus.REQUEST_TIMEOUT), // 408
    requestTooLong: build(HttpStatus.REQUEST_TOO_LONG), // 413
    requestUriTooLong: build(HttpStatus.REQUEST_URI_TOO_LONG), // 414
    requestedRangeNotSatisfiable: build(HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE), // 416
    resetContent: build(HttpStatus.RESET_CONTENT), // 205
    seeOther: build(HttpStatus.SEE_OTHER), // 303
    serviceUnavailable: build(HttpStatus.SERVICE_UNAVAILABLE), // 503
    switchingProtocols: build(HttpStatus.SWITCHING_PROTOCOLS), // 101
    temporaryRedirect: build(HttpStatus.TEMPORARY_REDIRECT), // 307
    tooManyRequests: build(HttpStatus.TOO_MANY_REQUESTS), // 429
    unauthorized: build(HttpStatus.UNAUTHORIZED), // 401
    unprocessableEntity: build(HttpStatus.UNPROCESSABLE_ENTITY), // 422
    unsupportedMediaType: build(HttpStatus.UNSUPPORTED_MEDIA_TYPE), // 415
    useProxy: build(HttpStatus.USE_PROXY) // 305
}