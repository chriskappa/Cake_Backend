import createError from "http-errors";

const validateRequest = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {

        if (error.issues) {
            return next(createError(400, error.issues[0].message));
        }
        next(createError(500, "Validation failed"));
    }
};

export default validateRequest;
