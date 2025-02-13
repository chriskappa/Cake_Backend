export const errorMiddleware = (err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        error: {
            message: err.message || 'Internal Server Error',
        },
    });
}