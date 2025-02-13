import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Comment text is required"],
        minlength: [5, "Comment must be at least 5 characters long"],
        maxLength: [200, "Cake comment must be at most 200 characters"]
    },
    yumFactor: {
        type: Number,
        required: [true, "Yum Factor is required"],
        min: [1, "Yum Factor must be at least 1"],
        max: [5, "Yum Factor cannot be more than 5"],
    },
    username: {
        type: String,
        required: false,
    }
}, { timestamps: true });

const CakeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Cake name is required"],
            minlength: [3, "Cake name must be at least 3 characters"],
            trim: true,
            unique: true,
        },
        comment: {
            type: String,
            required: [true, "Cake comment is required"],
            minlength: [5, "Cake comment must be at least 5 characters"],
            maxLength: [200, "Cake comment must be at most 200 characters"],
            trim: true,
        },
        comments: [CommentSchema],
        yumFactor: {
            type: Number,
            required: [true, "Yum Factor is required"],
            min: [1, "Yum Factor must be at least 1"],
            max: [5, "Yum Factor cannot be more than 5"],
        },
        imageUrl: {
            type: String,
            default: "https://via.placeholder.com/150",
            validate: {
                validator: function (v) {
                    return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/.test(v);
                },
                message: "Invalid image URL",
            },
        },
    },
    { timestamps: true }
);

const Cake = mongoose.model("Cake", CakeSchema);
export default Cake;
