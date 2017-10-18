require("should");

const {notFound, internalServerError} = require('../index');

describe('HTTP Responses', () => {
    it('call not found method should return 404 status code and correct message', () => {
       let ctx = {}; 
       notFound(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(404);
        ctx.body.message.should.be.eql('Not Found');
    });

    it('call not found method with personalized message should return 404 status code and correct message', () => {
       let ctx = {}; 
       notFound(ctx, {response: "Route Not Found"});

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(404);
        ctx.body.response.should.be.eql('Route Not Found');
    });

    it('call internal server error method should return 500 status code and correct message', () => {
       let ctx = {}; 
       internalServerError(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(500);
        ctx.body.message.should.be.eql('Server Error');
    });

    it('call internal server error method with personalized message should return 500 status code and correct message', () => {
       let ctx = {}; 
       internalServerError(ctx, {response: "Internal Server Error"});

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(500);
        ctx.body.response.should.be.eql('Internal Server Error');
    });
});
