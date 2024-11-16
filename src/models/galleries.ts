import mongoose from "mongoose";


const gallerySchema = new mongoose.Schema({
    title: {type: String},    
    type: {type: String},
    path: {type: String}
},{
    versionKey: false
});

export default mongoose.models.galleries|| mongoose.model("galleries", gallerySchema);