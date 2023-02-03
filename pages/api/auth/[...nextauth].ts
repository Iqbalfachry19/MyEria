import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { verify } from 'argon2';
import { NextAuthOptions } from 'next-auth';
import { prisma } from '../../../db/db';
import { loginSchema } from '../../../db/auth';
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Credentials({
      id: 'password',
      name: 'username',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        const creds = await loginSchema.parseAsync(credentials);

        const user: any = await prisma.karyawan.findFirst({
          where: { username: creds.username },
        });

        if (user) {
          const isValidPassword = await verify(user.password, creds.password);
          if (isValidPassword) {
            return {
              id: user.id,

              name: user.username,
              admin: user.admin,
            };
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: '/auth/signin',
  },
};
export default NextAuth(authOptions);
