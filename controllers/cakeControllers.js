import { addCakeToDb, addComment, deleteCake, getAllCakes, updateSingleCake } from "../services/cakeServices.js";
import createError from "http-errors";

export const fetchCakesController = async (req, res, next) => {
    try {
        const cakes = await getAllCakes()
        if (!cakes.length) res.send([])
        res.send(cakes);
    }
    catch (error) {
        next(createError(500, error.message));
    }
}

export const fetchSingleCakeController = async (req, res, next) => {
    try {
        const cake = req.cake
        if (!cake) return next(createError(404, "Cake not found!"));
        res.json(cake);
    } catch (error) {
        next(createError(500, error.message));
    }
}

export const addNewCakeController = async (req, res, next) => {
    try {
        const { title, imageUrl, yumFactor, comment } = req.body;
        const newCake = await addCakeToDb({ title, imageUrl, yumFactor, comment })
        res.status(200).json(newCake);
    } catch (error) {
        next(createError(500, error.message));
    }
}

export const updateCakeController = async (req, res, next) => {
    try {
        const { id } = req.params
        const updatedCake = await updateSingleCake(id, req.body);
        return res.json(updatedCake);
    } catch (error) {
        next(createError(500, error.message));
    }
};

export const deleteCakeController = async (req, res, next) => {
    try {
        const { id } = req.params
        await deleteCake(id)
        res.status(200).json({ success: true, message: `Cake with ID: ${id} deleted` });
    }
    catch (error) {
        next(createError(500, error.message));
    }
}

export const addCommentController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedCake = await addComment(id, req.body);

        res.status(201).json({
            message: "Comment added successfully",
            updatedCake
        });
    } catch (error) {

        next(createError(500, error.message));
    }
};
