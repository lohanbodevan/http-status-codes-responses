# HTTP Responses <a href="https://travis-ci.org/lohanbodevan/http-responses"><img alt="Travis Status" src="https://travis-ci.org/lohanbodevan/http-responses.svg?branch=master"></a> [![Coverage Status](https://coveralls.io/repos/github/lohanbodevan/http-responses/badge.svg)](https://coveralls.io/github/lohanbodevan/http-responses)

Don't spend time writing personalized response body for non-success requests.

## How to use?
1. Install lib
```
npm install git+https://github.com/lohanbodevan/http-responses.git
```

2. Use it
```
const {notFound} = require('http-responses');

const person = new Person();
let john = person.findOne(1);
if (john !== undefined) {
    ctx.body = john.json();
    ctx.status = 200;
}

notFound(ctx);
```

Then HTTP response status code will setted to `404` with body:
```
{
    "message": "Not Found"
}
```

## Implemented Status Code
* 404
* 500

## Tests
```
npm test
```
