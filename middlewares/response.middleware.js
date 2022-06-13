const responseMiddleware = (req, res, next) => {
    // TODO: Implement middleware that returns result of the query
    if (res.err) {
        return res.status(404).json({
            error: true,
            message: `${res.err}`
        });
    }
    if (!res.data) {
        return res.status(404).json({
            error: true,
            message: `the requested data was not found`
        });
    }
    //коли хочемо видалити по невірному ід
    if (Array.isArray(res.data) && !res.data.length) {
        return res.status(404).json({
            error: true,
            message: `the requested data was not found`
        });
    }

    else {
        return res.status(200).send(JSON.stringify(res.data));
    }
}

exports.responseMiddleware = responseMiddleware;