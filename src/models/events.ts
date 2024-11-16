import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    fullDescription: {type: String},
    imageUrl: {type: String},
    date: {type: String},
    city: {type: String}
},
{
    versionKey: false

});




export default mongoose.models.events || mongoose.model("events", eventsSchema);