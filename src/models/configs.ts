import mongoose from "mongoose";

const configsSchema = new mongoose.Schema({
    contacts: {
        phone: {
            primary: { type: String },
            secondary: { type: String },
        },
        email: {type: String},
        social: {
            instagram: {type: String},
            facebook: {type: String},
            tiktok: {type: String},
            maps: {type: String},
            x: {type: String},
        }
    },
    hours: {
        mf: { type: String },
        ss: { type: String }
    },
    images: {
        banner: { type: String },
        steps: { type: String }
    }
});

export default mongoose.models.configs || mongoose.model("configs", configsSchema);