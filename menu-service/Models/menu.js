import mongoose from 'mongoose';

const MenuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Menu', MenuSchema);
