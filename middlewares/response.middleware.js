const responseMiddleware = (req, res, next) => {
    // TODO: Implement middleware that returns result of the query
console.log('а тепер заходимо в мідлвер');
console.log(res.err, 'тут помилка');
console.log(res.data, 'тут тіло');
    if (res.err) {
        res.status(404).end( JSON.stringify ({
                error: true,
                message: `${res.err}`
            }));
    }  
    if (!res.data) {
        res.status(404).end( JSON.stringify ({
                error: true,
                message: `the requested data was not found`
            }));
    }   
    //коли хочемо видалити по невірному ід
    if (Array.isArray(res.data) && !res.data.length) {
        res.status(404).end( JSON.stringify ({
            error: true,
            message: `the requested data was not found`
        }));
    }
    
    else {
        console.log('маємо зайти  в елсе, типу все норм');
        res.status(200).send(JSON.stringify(res.data));
    //    next()
    }
}

exports.responseMiddleware = responseMiddleware;