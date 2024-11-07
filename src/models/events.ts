import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    image: {type: String},
    positionImage: {type: String},
    datetime: {type: String},
    location: {type: String}
});

export default mongoose.models.events || mongoose.model("events", eventsSchema);