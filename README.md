# HTTP Responses

Dont't spend time writing personalized response body for non-success requests.

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
