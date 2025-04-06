import NextAuth, { NextAuthOptions, Session, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../lib/mongodb";
import User from "../../../lib/mongodb/models/User";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";

interface CustomUser extends NextAuthUser {
  role?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        
      },
      async authorize(credentials) {
        // Connect to MongoDB
        await connectDB();

        // Find user in the DB
        const user = await User.findOne({ email: credentials?.email });

        if (user && bcrypt.compareSync(credentials!.password, user.password)) {
          // Authentication successful
          return { email: user.email, role: user.role } as CustomUser;
        }
        return null; // authentication failed
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: CustomUser }) {
      // Persist the user's role in the JWT token
      if (user) {
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Add user role to session
      if (session.user && token) {
        session.user.role = token.role;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
