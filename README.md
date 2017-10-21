# HTTP Responses <a href="https://travis-ci.org/lohanbodevan/http-responses"><img alt="Travis Status" src="https://travis-ci.org/lohanbodevan/http-responses.svg?branch=master"></a> [![Coverage Status](https://coveralls.io/repos/github/lohanbodevan/http-responses/badge.svg)](https://coveralls.io/github/lohanbodevan/http-responses) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/greatjapa/http-responses/blob/master/LICENSE)


Don't spend time writing personalized response body for non-success requests.

## How to use?
1. Install lib
```bash
npm install git+https://github.com/lohanbodevan/http-responses.git
```

2. Use it
```javascript
const {ok, notFound} = require('http-responses');

const person = new Person();
let john = person.findOne(1);
const ctx = (john !== undefined) ? ok({}, john.json()) : notFound({});
```

If John exists, the result will be as following with status code `200`:
```json
{
    "name": "John",
    "occupation": "singer",
}
```

Otherwise the HTTP response status code will setted to `404` with body:
```json
{
    "message": "Not Found"
}
```

## Implemented Status Code
| Function | Status Code | Default Message |
|:---------|------------|--------------|
| accepted | 202 | { message: 'Accepted' } |
| badGateway | 502 | { message: 'Bad Gateway' } |
| badRequest | 400 | { message: 'Bad Request' } |
| conflict | 409 | { message: 'Conflict' } |
| continue | 100 | { message: 'Continue' } |
| created | 201 | { message: 'Created' } |
| expectationFailed | 417 | { message: 'Expectation Failed' } |
| failedDependency | 424 | { message: 'Failed Dependency' } |
| forbidden | 403 | { message: 'Forbidden' } |
| gatewayTimeout | 504 | { message: 'Gateway Timeout' } |
| gone | 410 | { message: 'Gone' } |
| httpVersionNotSupported | 505 | { message: 'HTTP Version Not Supported' } |
| imATeapot | 418 | { message: 'I\'m a teapot' } |
| insufficientSpaceOnResource | 419 | { message: 'Insufficient Space on Resource' } |
| insufficientStorage | 507 | { message: 'Insufficient Storage' } |
| internalServerError | 500 | { message: 'Server Error' } |
| lengthRequired | 411 | { message: 'Length Required' } |
| locked | 423 | { message: 'Locked' } |
| methodFailure | 420 | { message: 'Method Failure' } |
| methodNotAllowed | 405 | { message: 'Method Not Allowed' } |
| movedPermanently | 301 | { message: 'Moved Permanently' } |
| movedTemporarily | 302 | { message: 'Moved Temporarily' } |
| multiStatus | 207 | { message: 'Multi-Status' } |
| multipleChoices | 300 | { message: 'Multiple Choices' } |
| networkAuthenticationRequired | 511 | { message: 'Network Authentication Required' } |
| noContent | 204 | { message: 'No Content' } |
| nonAuthoritativeInformation | 203 | { message: 'Non Authoritative Information' } |
| notAcceptable | 406 | { message: 'Not Acceptable' } |
| notFound | 404 | { message: 'Not Found' } |
| notImplemented | 501 | { message: 'Not Implemented' } |
| notModified | 304 | { message: 'Not Modified' } |
| ok | 200 | { message: 'OK' } |
| partialContent | 206 | { message: 'Partial Content' } |
| paymentRequired | 402 | { message: 'Payment Required' } |
| permanentRedirect | 308 | { message: 'Permanent Redirect' } |
| preconditionFailed | 412 | { message: 'Precondition Failed' } |
| preconditionRequired | 428 | { message: 'Precondition Required' } |
| processing | 102 | { message: 'Processing' } |
| proxyAuthenticationRequired | 407 | { message: 'Proxy Authentication Required' } |
| requestHeaderFieldsTooLarge | 431 | { message: 'Request Header Fields Too Large' } |
| requestTimeout | 408 | { message: 'Request Timeout' } |
| requestTooLong | 413 | { message: 'Request Entity Too Large' } |
| requestUriTooLong | 414 | { message: 'Request-URI Too Long' } |
| requestedRangeNotSatisfiable | 416 | { message: 'Requested Range Not Satisfiable' } |
| resetContent | 205 | { message: 'Reset Content' } |
| seeOther | 303 | { message: 'See Other' } |
| serviceUnavailable | 503 | { message: 'Service Unavailable' } |
| switchingProtocols | 101 | { message: 'Switching Protocols' } |
| temporaryRedirect | 307 | { message: 'Temporary Redirect' } |
| tooManyRequests | 429 | { message: 'Too Many Requests' } |
| unauthorized | 401 | { message: 'Unauthorized' } |
| unprocessableEntity | 422 | { message: 'Unprocessable Entity' } |
| unsupportedMediaType | 415 | { message: 'Unsupported Media Type' } |
| useProxy | 305 | { message: 'Use Proxy' } |

## Tests
```bash
npm test
```
