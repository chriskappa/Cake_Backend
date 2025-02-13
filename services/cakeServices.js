import Cake from "../models/CakeModel.js";

export const getCakeById = async (id) => await Cake.findById(id);

export const getAllCakes = async () => await Cake.find({}).sort({ _id: -1 });

export const addCakeToDb = async (obj) => await Cake.create(obj);

export const updateSingleCake = async (id, updateData) => await Cake.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

export const deleteCake = async (id) => await Cake.findByIdAndDelete(id);

export const addComment = async (id, commentData) => {
    return await Cake.findByIdAndUpdate(
        id,
        { $push: { comments: commentData } },
        { new: true, runValidators: true }
    );
}



