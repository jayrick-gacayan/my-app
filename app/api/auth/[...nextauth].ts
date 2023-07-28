import { Awaitable, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

const handler: any = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials: Record<never, string> | undefined) {
        return {
          id: 1,
          firstName: 'Jayrick',
          lastName: 'Gac',
          passportToken: '',
          profileImage: ''
        } as any;
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      user && (token.user = user);

      if (trigger === 'update') {
        return session;
      }
      return token;
    },
    async session({ session, token, user, newSession, trigger }) {
      if (token.user) {
        session.user = token.user as any
      }
      return session;
    }
  }

});

export { handler as GET, handler as POST }