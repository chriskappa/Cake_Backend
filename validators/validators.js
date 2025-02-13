import { z } from "zod";

export const addNewCakeSchema = z.object({
    title: z.string().min(3, "title must be at least 3 characters long."),
    imageUrl: z.string().url(),
    yumFactor: z.number().min(1, "Yum Factor must be between 1 and 5").max(5, "Yum Factor must be between 1 and 5"),
    comment: z.string().min(3, "Comment must be at least 2 characters")
});

export const commentSchema = z.object({
    text: z.string().min(3, "Comment must be at least 3 characters long."),
    yumFactor: z.number().min(1, "Yum Factor must be between 1 and 5").max(5, "Yum Factor must be between 1 and 5"),
    username: z.string().min(2, "Username must be at least 2 characters long."),
});

export const updateCakeSchema = z
    .object({
        title: z.string().min(3, { message: "Title must be at least 3 characters long." }).optional(),
        imageUrl: z.string().url({ message: "Invalid image URL." }).optional(),
        yumFactor: z
            .number()
            .min(1, { message: "Yum Factor must be between 1 and 5." })
            .max(5, { message: "Yum Factor must be between 1 and 5." })
            .optional(),
        comment: z.string().min(3, { message: "Comment must be at least 3 characters long." }).optional(),
    })
    .refine((data) => Object.values(data).some((value) => value !== undefined), {
        message: "At least one field (title, Image URL , yumFactor, or comment) is required.",
        path: ["_general"],
    });
