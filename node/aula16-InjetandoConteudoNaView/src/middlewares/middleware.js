exports.middleWareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Teste da variável local'
    next();
}

exports.outroMiddleWare = (req, res, next) => {
    next();
}