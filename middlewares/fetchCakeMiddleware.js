import { getCakeById } from "../services/cakeServices.js";
import createError from "http-errors";

export const fetchCakeMiddleware = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cake = await getCakeById(id);

        if (!cake) {
            return next(createError(204, "Cake not found!"));
        }

        req.cake = cake;
        next();
    } catch (error) {
        next(createError(500, "Internal Server Error"));
    }
};
