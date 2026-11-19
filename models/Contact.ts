import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
    name: string;
    email?: string;
    phone?: string;
    source?: string;
    company?: string;
    service?: string;
    budget?: string;
    message: string;
    status: 'new' | 'read' | 'replied';
    createdAt: Date;
    updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
        },
        phone: { type: String, trim: true, maxlength: 25 },
        source: { type: String, trim: true, maxlength: 40 },
        company: {
            type: String,
            trim: true,
            maxlength: [100, 'Company name cannot exceed 100 characters'],
        },
        service: {
            type: String,
            trim: true,
            maxlength: 60,
        },
        budget: {
            type: String,
            trim: true,
            maxlength: 60,
        },
        message: {
            type: String,
            required: [true, 'Message is required'],
            maxlength: [5000, 'Message cannot exceed 5000 characters'],
        },
        status: {
            type: String,
            enum: ['new', 'read', 'replied'],
            default: 'new',
        },
    },
    {
        timestamps: true,
    }
);

// Prevent model recompilation in development
const Contact: Model<IContact> =
    mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
