import mongoose from "mongoose";
const Schema = mongoose.Schema;


const SummarySchema = new Schema({
    user: { type: String, required: true },
    text: { type: String, required: true }
});

export default mongoose.model("Summary", SummarySchema);