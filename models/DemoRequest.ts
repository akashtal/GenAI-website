import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDemoRequest extends Document {
    email: string;
    name?: string;
    company?: string;
    source: string;
    status: 'pending' | 'contacted' | 'scheduled' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}

const DemoRequestSchema = new Schema<IDemoRequest>(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
        },
        name: {
            type: String,
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        company: {
            type: String,
            trim: true,
            maxlength: [100, 'Company name cannot exceed 100 characters'],
        },
        source: {
            type: String,
            required: true,
            enum: ['homepage', 'services', 'dealership', 'footer', 'other'],
            default: 'homepage',
        },
        status: {
            type: String,
            enum: ['pending', 'contacted', 'scheduled', 'completed'],
            default: 'pending',
        },
    },
    {
        timestamps: true,
    }
);

const DemoRequest: Model<IDemoRequest> =
    mongoose.models.DemoRequest || mongoose.model<IDemoRequest>('DemoRequest', DemoRequestSchema);

export default DemoRequest;
