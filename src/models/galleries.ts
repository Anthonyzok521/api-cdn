import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    title: {type: String},    
    image: {type: String},
});

export default mongoose.models.galleries|| mongoose.model("galleries", gallerySchema);