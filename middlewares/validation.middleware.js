const validationMiddleware = (schema, property) => {
    return (req, res, next) => {
        const {error} = schema.validate(req.body);

        if (!error) {
            next();
        } else {
            const {details} = error;
            return next(new Error(details[0].message), 400);
        }
    }
}

export default validationMiddleware;
