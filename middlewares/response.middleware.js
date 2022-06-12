const responseMiddleware = (req, res, next) => {
    // TODO: Implement middleware that returns result of the query
console.log('а тепер заходимо в мідлвер');
    if (res.err) {
        res
            .status(404)
            .end( JSON.stringify ({
                error: true,
                message: `${res.err}`
            }));
    } else {
        res
            .status(200)
            .end(JSON.stringify(res.data));
        next();
    }
}

exports.responseMiddleware = responseMiddleware;