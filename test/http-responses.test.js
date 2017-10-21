require("should");

const response = require('../index');

describe('HTTP Responses', () => {
    it('call accepted method should return 202 status code and correct message', () => {
        let ctx = {};
        response.accepted(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(202);
        ctx.body.message.should.be.eql('Accepted');
    });

    it('call accepted method with personalized message should return 202 status code and correct message', () => {
        let ctx = {};
        response.accepted(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(202);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call badGateway method should return 502 status code and correct message', () => {
        let ctx = {};
        response.badGateway(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(502);
        ctx.body.message.should.be.eql('Bad Gateway');
    });

    it('call badGateway method with personalized message should return 502 status code and correct message', () => {
        let ctx = {};
        response.badGateway(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(502);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call badRequest method should return 400 status code and correct message', () => {
        let ctx = {};
        response.badRequest(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(400);
        ctx.body.message.should.be.eql('Bad Request');
    });

    it('call badRequest method with personalized message should return 400 status code and correct message', () => {
        let ctx = {};
        response.badRequest(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(400);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call conflict method should return 409 status code and correct message', () => {
        let ctx = {};
        response.conflict(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(409);
        ctx.body.message.should.be.eql('Conflict');
    });

    it('call conflict method with personalized message should return 409 status code and correct message', () => {
        let ctx = {};
        response.conflict(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(409);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call continue method should return 100 status code and correct message', () => {
        let ctx = {};
        response.continue(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(100);
        ctx.body.message.should.be.eql('Continue');
    });

    it('call continue method with personalized message should return 100 status code and correct message', () => {
        let ctx = {};
        response.continue(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(100);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call created method should return 201 status code and correct message', () => {
        let ctx = {};
        response.created(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(201);
        ctx.body.message.should.be.eql('Created');
    });

    it('call created method with personalized message should return 201 status code and correct message', () => {
        let ctx = {};
        response.created(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(201);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call expectationFailed method should return 417 status code and correct message', () => {
        let ctx = {};
        response.expectationFailed(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(417);
        ctx.body.message.should.be.eql('Expectation Failed');
    });

    it('call expectationFailed method with personalized message should return 417 status code and correct message', () => {
        let ctx = {};
        response.expectationFailed(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(417);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call failedDependency method should return 424 status code and correct message', () => {
        let ctx = {};
        response.failedDependency(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(424);
        ctx.body.message.should.be.eql('Failed Dependency');
    });

    it('call failedDependency method with personalized message should return 424 status code and correct message', () => {
        let ctx = {};
        response.failedDependency(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(424);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call forbidden method should return 403 status code and correct message', () => {
        let ctx = {};
        response.forbidden(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(403);
        ctx.body.message.should.be.eql('Forbidden');
    });

    it('call forbidden method with personalized message should return 403 status code and correct message', () => {
        let ctx = {};
        response.forbidden(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(403);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call gatewayTimeout method should return 504 status code and correct message', () => {
        let ctx = {};
        response.gatewayTimeout(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(504);
        ctx.body.message.should.be.eql('Gateway Timeout');
    });

    it('call gatewayTimeout method with personalized message should return 504 status code and correct message', () => {
        let ctx = {};
        response.gatewayTimeout(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(504);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call gone method should return 410 status code and correct message', () => {
        let ctx = {};
        response.gone(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(410);
        ctx.body.message.should.be.eql('Gone');
    });

    it('call gone method with personalized message should return 410 status code and correct message', () => {
        let ctx = {};
        response.gone(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(410);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call httpVersionNotSupported method should return 505 status code and correct message', () => {
        let ctx = {};
        response.httpVersionNotSupported(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(505);
        ctx.body.message.should.be.eql('HTTP Version Not Supported');
    });

    it('call httpVersionNotSupported method with personalized message should return 505 status code and correct message', () => {
        let ctx = {};
        response.httpVersionNotSupported(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(505);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call imATeapot method should return 418 status code and correct message', () => {
        let ctx = {};
        response.imATeapot(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(418);
        ctx.body.message.should.be.eql("I'm a teapot");
    });

    it('call imATeapot method with personalized message should return 418 status code and correct message', () => {
        let ctx = {};
        response.imATeapot(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(418);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call insufficientSpaceOnResource method should return 419 status code and correct message', () => {
        let ctx = {};
        response.insufficientSpaceOnResource(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(419);
        ctx.body.message.should.be.eql("Insufficient Space on Resource");
    });

    it('call insufficientSpaceOnResource method with personalized message should return 419 status code and correct message', () => {
        let ctx = {};
        response.insufficientSpaceOnResource(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(419);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call insufficientStorage method should return 507 status code and correct message', () => {
        let ctx = {};
        response.insufficientStorage(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(507);
        ctx.body.message.should.be.eql("Insufficient Storage");
    });

    it('call insufficientStorage method with personalized message should return 507 status code and correct message', () => {
        let ctx = {};
        response.insufficientStorage(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(507);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call internal server error method should return 500 status code and correct message', () => {
        let ctx = {};
        response.internalServerError(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(500);
        ctx.body.message.should.be.eql('Server Error');
    });

    it('call internal server error method with personalized message should return 500 status code and correct message', () => {
        let ctx = {};
        response.internalServerError(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(500);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call lengthRequired method should return 411 status code and correct message', () => {
        let ctx = {};
        response.lengthRequired(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(411);
        ctx.body.message.should.be.eql("Length Required");
    });

    it('call lengthRequired method with personalized message should return 411 status code and correct message', () => {
        let ctx = {};
        response.lengthRequired(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(411);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call locked method should return 423 status code and correct message', () => {
        let ctx = {};
        response.locked(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(423);
        ctx.body.message.should.be.eql("Locked");
    });

    it('call locked method with personalized message should return 423 status code and correct message', () => {
        let ctx = {};
        response.locked(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(423);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call methodFailure method should return 420 status code and correct message', () => {
        let ctx = {};
        response.methodFailure(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(420);
        ctx.body.message.should.be.eql("Method Failure");
    });

    it('call methodFailure method with personalized message should return 420 status code and correct message', () => {
        let ctx = {};
        response.methodFailure(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(420);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call methodNotAllowed method should return 405 status code and correct message', () => {
        let ctx = {};
        response.methodNotAllowed(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(405);
        ctx.body.message.should.be.eql("Method Not Allowed");
    });

    it('call methodNotAllowed method with personalized message should return 405 status code and correct message', () => {
        let ctx = {};
        response.methodNotAllowed(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(405);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call movedPermanently method should return 301 status code and correct message', () => {
        let ctx = {};
        response.movedPermanently(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(301);
        ctx.body.message.should.be.eql("Moved Permanently");
    });

    it('call movedPermanently method with personalized message should return 301 status code and correct message', () => {
        let ctx = {};
        response.movedPermanently(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(301);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call movedTemporarily method should return 302 status code and correct message', () => {
        let ctx = {};
        response.movedTemporarily(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(302);
        ctx.body.message.should.be.eql("Moved Temporarily");
    });

    it('call movedTemporarily method with personalized message should return 302 status code and correct message', () => {
        let ctx = {};
        response.movedTemporarily(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(302);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call multiStatus method should return 207 status code and correct message', () => {
        let ctx = {};
        response.multiStatus(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(207);
        ctx.body.message.should.be.eql("Multi-Status");
    });

    it('call multiStatus method with personalized message should return 207 status code and correct message', () => {
        let ctx = {};
        response.multiStatus(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(207);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call multipleChoices method should return 300 status code and correct message', () => {
        let ctx = {};
        response.multipleChoices(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(300);
        ctx.body.message.should.be.eql("Multiple Choices");
    });

    it('call multipleChoices method with personalized message should return 300 status code and correct message', () => {
        let ctx = {};
        response.multipleChoices(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(300);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call networkAuthenticationRequired method should return 511 status code and correct message', () => {
        let ctx = {};
        response.networkAuthenticationRequired(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(511);
        ctx.body.message.should.be.eql("Network Authentication Required");
    });

    it('call networkAuthenticationRequired method with personalized message should return 511 status code and correct message', () => {
        let ctx = {};
        response.networkAuthenticationRequired(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(511);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call noContent method should return 204 status code and correct message', () => {
        let ctx = {};
        response.noContent(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(204);
        ctx.body.message.should.be.eql("No Content");
    });

    it('call noContent method with personalized message should return 204 status code and correct message', () => {
        let ctx = {};
        response.noContent(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(204);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call nonAuthoritativeInformation method should return 203 status code and correct message', () => {
        let ctx = {};
        response.nonAuthoritativeInformation(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(203);
        ctx.body.message.should.be.eql("Non Authoritative Information");
    });

    it('call nonAuthoritativeInformation method with personalized message should return 203 status code and correct message', () => {
        let ctx = {};
        response.nonAuthoritativeInformation(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(203);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call notAcceptable method should return 406 status code and correct message', () => {
        let ctx = {};
        response.notAcceptable(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(406);
        ctx.body.message.should.be.eql("Not Acceptable");
    });

    it('call notAcceptable method with personalized message should return 406 status code and correct message', () => {
        let ctx = {};
        response.notAcceptable(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(406);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call notAcceptable method should return 406 status code and correct message', () => {
        let ctx = {};
        response.notAcceptable(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(406);
        ctx.body.message.should.be.eql("Not Acceptable");
    });

    it('call notAcceptable method with personalized message should return 406 status code and correct message', () => {
        let ctx = {};
        response.notAcceptable(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(406);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call not found method should return 404 status code and correct message', () => {
        let ctx = {};
        response.notFound(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(404);
        ctx.body.message.should.be.eql('Not Found');
    });

    it('call not found method with personalized message should return 404 status code and correct message', () => {
        let ctx = {};
        response.notFound(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(404);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call notImplemented method should return 501 status code and correct message', () => {
        let ctx = {};
        response.notImplemented(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(501);
        ctx.body.message.should.be.eql("Not Implemented");
    });

    it('call notImplemented method with personalized message should return 501 status code and correct message', () => {
        let ctx = {};
        response.notImplemented(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(501);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call notModified method should return 304 status code and correct message', () => {
        let ctx = {};
        response.notModified(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(304);
        ctx.body.message.should.be.eql("Not Modified");
    });

    it('call notModified method with personalized message should return 304 status code and correct message', () => {
        let ctx = {};
        response.notModified(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(304);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call ok method should return 200 status code and correct message', () => {
        let ctx = {};
        response.ok(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(200);
        ctx.body.message.should.be.eql("OK");
    });

    it('call ok method with personalized message should return 200 status code and correct message', () => {
        let ctx = {};
        response.ok(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(200);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call partialContent method should return 206 status code and correct message', () => {
        let ctx = {};
        response.partialContent(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(206);
        ctx.body.message.should.be.eql("Partial Content");
    });

    it('call partialContent method with personalized message should return 206 status code and correct message', () => {
        let ctx = {};
        response.partialContent(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(206);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call paymentRequired method should return 402 status code and correct message', () => {
        let ctx = {};
        response.paymentRequired(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(402);
        ctx.body.message.should.be.eql("Payment Required");
    });

    it('call paymentRequired method with personalized message should return 402 status code and correct message', () => {
        let ctx = {};
        response.paymentRequired(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(402);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call permanentRedirect method should return 308 status code and correct message', () => {
        let ctx = {};
        response.permanentRedirect(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(308);
        ctx.body.message.should.be.eql("Permanent Redirect");
    });

    it('call permanentRedirect method with personalized message should return 308 status code and correct message', () => {
        let ctx = {};
        response.permanentRedirect(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(308);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call preconditionFailed method should return 412 status code and correct message', () => {
        let ctx = {};
        response.preconditionFailed(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(412);
        ctx.body.message.should.be.eql("Precondition Failed");
    });

    it('call preconditionFailed method with personalized message should return 412 status code and correct message', () => {
        let ctx = {};
        response.preconditionFailed(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(412);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call preconditionRequired method should return 428 status code and correct message', () => {
        let ctx = {};
        response.preconditionRequired(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(428);
        ctx.body.message.should.be.eql("Precondition Required");
    });

    it('call preconditionRequired method with personalized message should return 428 status code and correct message', () => {
        let ctx = {};
        response.preconditionRequired(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(428);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call processing method should return 102 status code and correct message', () => {
        let ctx = {};
        response.processing(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(102);
        ctx.body.message.should.be.eql("Processing");
    });

    it('call processing method with personalized message should return 102 status code and correct message', () => {
        let ctx = {};
        response.processing(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(102);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call proxyAuthenticationRequired method should return 407 status code and correct message', () => {
        let ctx = {};
        response.proxyAuthenticationRequired(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(407);
        ctx.body.message.should.be.eql("Proxy Authentication Required");
    });

    it('call proxyAuthenticationRequired method with personalized message should return 407 status code and correct message', () => {
        let ctx = {};
        response.proxyAuthenticationRequired(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(407);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call requestHeaderFieldsTooLarge method should return 431 status code and correct message', () => {
        let ctx = {};
        response.requestHeaderFieldsTooLarge(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(431);
        ctx.body.message.should.be.eql("Request Header Fields Too Large");
    });

    it('call requestHeaderFieldsTooLarge method with personalized message should return 431 status code and correct message', () => {
        let ctx = {};
        response.requestHeaderFieldsTooLarge(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(431);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call requestTimeout method should return 408 status code and correct message', () => {
        let ctx = {};
        response.requestTimeout(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(408);
        ctx.body.message.should.be.eql("Request Timeout");
    });

    it('call requestTimeout method with personalized message should return 408 status code and correct message', () => {
        let ctx = {};
        response.requestTimeout(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(408);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call requestTooLong method should return 413 status code and correct message', () => {
        let ctx = {};
        response.requestTooLong(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(413);
        ctx.body.message.should.be.eql("Request Entity Too Large");
    });

    it('call requestTooLong method with personalized message should return 413 status code and correct message', () => {
        let ctx = {};
        response.requestTooLong(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(413);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call requestUriTooLong method should return 414 status code and correct message', () => {
        let ctx = {};
        response.requestUriTooLong(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(414);
        ctx.body.message.should.be.eql("Request-URI Too Long");
    });

    it('call requestUriTooLong method with personalized message should return 414 status code and correct message', () => {
        let ctx = {};
        response.requestUriTooLong(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(414);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call requestedRangeNotSatisfiable method should return 416 status code and correct message', () => {
        let ctx = {};
        response.requestedRangeNotSatisfiable(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(416);
        ctx.body.message.should.be.eql("Requested Range Not Satisfiable");
    });

    it('call requestedRangeNotSatisfiable method with personalized message should return 416 status code and correct message', () => {
        let ctx = {};
        response.requestedRangeNotSatisfiable(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(416);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call resetContent method should return 205 status code and correct message', () => {
        let ctx = {};
        response.resetContent(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(205);
        ctx.body.message.should.be.eql("Reset Content");
    });

    it('call resetContent method with personalized message should return 205 status code and correct message', () => {
        let ctx = {};
        response.resetContent(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(205);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call seeOther method should return 303 status code and correct message', () => {
        let ctx = {};
        response.seeOther(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(303);
        ctx.body.message.should.be.eql("See Other");
    });

    it('call seeOther method with personalized message should return 303 status code and correct message', () => {
        let ctx = {};
        response.seeOther(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(303);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call serviceUnavailable method should return 503 status code and correct message', () => {
        let ctx = {};
        response.serviceUnavailable(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(503);
        ctx.body.message.should.be.eql("Service Unavailable");
    });

    it('call serviceUnavailable method with personalized message should return 503 status code and correct message', () => {
        let ctx = {};
        response.serviceUnavailable(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(503);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call switchingProtocols method should return 101 status code and correct message', () => {
        let ctx = {};
        response.switchingProtocols(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(101);
        ctx.body.message.should.be.eql("Switching Protocols");
    });

    it('call switchingProtocols method with personalized message should return 101 status code and correct message', () => {
        let ctx = {};
        response.switchingProtocols(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(101);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call temporaryRedirect method should return 307 status code and correct message', () => {
        let ctx = {};
        response.temporaryRedirect(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(307);
        ctx.body.message.should.be.eql("Temporary Redirect");
    });

    it('call temporaryRedirect method with personalized message should return 307 status code and correct message', () => {
        let ctx = {};
        response.temporaryRedirect(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(307);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call tooManyRequests method should return 429 status code and correct message', () => {
        let ctx = {};
        response.tooManyRequests(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(429);
        ctx.body.message.should.be.eql("Too Many Requests");
    });

    it('call tooManyRequests method with personalized message should return 429 status code and correct message', () => {
        let ctx = {};
        response.tooManyRequests(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(429);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call unauthorized method should return 401 status code and correct message', () => {
        let ctx = {};
        response.unauthorized(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(401);
        ctx.body.message.should.be.eql("Unauthorized");
    });

    it('call unauthorized method with personalized message should return 401 status code and correct message', () => {
        let ctx = {};
        response.unauthorized(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(401);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call unprocessableEntity method should return 422 status code and correct message', () => {
        let ctx = {};
        response.unprocessableEntity(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(422);
        ctx.body.message.should.be.eql("Unprocessable Entity");
    });

    it('call unprocessableEntity method with personalized message should return 422 status code and correct message', () => {
        let ctx = {};
        response.unprocessableEntity(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(422);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call unsupportedMediaType method should return 415 status code and correct message', () => {
        let ctx = {};
        response.unsupportedMediaType(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(415);
        ctx.body.message.should.be.eql("Unsupported Media Type");
    });

    it('call unsupportedMediaType method with personalized message should return 415 status code and correct message', () => {
        let ctx = {};
        response.unsupportedMediaType(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(415);
        ctx.body.response.should.be.eql('Custom message');
    });

    it('call useProxy method should return 305 status code and correct message', () => {
        let ctx = {};
        response.useProxy(ctx);

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('message');
        ctx.status.should.be.eql(305);
        ctx.body.message.should.be.eql("Use Proxy");
    });

    it('call useProxy method with personalized message should return 305 status code and correct message', () => {
        let ctx = {};
        response.useProxy(ctx, { response: "Custom message" });

        ctx.should.have.property('status');
        ctx.should.have.property('body');
        ctx.body.should.have.property('response');
        ctx.status.should.be.eql(305);
        ctx.body.response.should.be.eql('Custom message');
    });
});
