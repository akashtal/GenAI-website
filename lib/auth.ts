import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import connectDB from '@/lib/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    await connectDB();

                    // Try to find admin
                    let admin = await Admin.findOne({ email: credentials.email }).select('+password');

                    // If no admin exists and this matches setup credentials, create first admin
                    if (!admin) {
                        const setupEmail = process.env.ADMIN_SETUP_EMAIL;
                        const setupPassword = process.env.ADMIN_SETUP_PASSWORD;

                        if (
                            setupEmail &&
                            setupPassword &&
                            credentials.email === setupEmail &&
                            credentials.password === setupPassword
                        ) {
                            // Create the initial admin
                            admin = await Admin.create({
                                email: setupEmail,
                                password: setupPassword,
                                name: 'Admin',
                                role: 'superadmin',
                            });

                            // Fetch with password for comparison
                            admin = await Admin.findOne({ email: setupEmail }).select('+password');
                        }
                    }

                    if (!admin) {
                        return null;
                    }

                    const isPasswordValid = await bcrypt.compare(
                        credentials.password as string,
                        admin.password
                    );

                    if (!isPasswordValid) {
                        return null;
                    }

                    return {
                        id: admin._id.toString(),
                        email: admin.email,
                        name: admin.name,
                        role: admin.role,
                    };
                } catch (error) {
                    console.error('Auth error:', error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as string;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
});
