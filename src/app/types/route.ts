import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      role?: string; // Add role to the session object
    };
  }

  interface User extends NextAuthUser {
    role?: string; // Add role to the user object
  }
}
