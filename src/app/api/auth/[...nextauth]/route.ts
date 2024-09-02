import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/libs/db';
import bcrypt from 'bcrypt';

interface User {
  id: string; // Asegúrate de que el tipo sea 'string'
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
          throw new Error('No credentials provided');
        }

        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFound) return null; // Cambiado a `null` si no se encuentra el usuario

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password);

        if (!matchPassword) return null; // Cambiado a `null` si la contraseña no coincide

        // Asegúrate de que el `id` sea una cadena de texto
        return {
          id: userFound.id.toString(), // Convertir `id` a `string`
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
