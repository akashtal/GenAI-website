import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INewsletter extends Document {
    email: string;
    isActive: boolean;
    subscribedAt: Date;
    unsubscribedAt?: Date;
}

const NewsletterSchema = new Schema<INewsletter>(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        subscribedAt: {
            type: Date,
            default: Date.now,
        },
        unsubscribedAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const Newsletter: Model<INewsletter> =
    mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;
