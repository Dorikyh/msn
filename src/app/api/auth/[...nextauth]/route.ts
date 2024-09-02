import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/libs/db';
import bcrypt from 'bcrypt';

interface User {
  id: string;
  name: string;
  email: string;
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials) {
          return null; // Cambiado a null si no se proporcionan credenciales
        }

        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFound) return null;

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password);

        if (!matchPassword) return null;

        return {
          id: userFound.id.toString(), // Convertir el ID a string
          name: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
