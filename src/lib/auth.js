import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import credentialsProvider from "next-auth/providers/credentials";
import { User } from "./models.";
import { connectToDB } from "./utils";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    connectToDB;

    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Wrong credentials");
    }

    const isPasswordMatch = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordMatch) {
      throw new Error("Wrong credentials!");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failled to login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    credentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
      if (account.provider === "github") {
        connectToDB();

        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return error;
        }
      }
      return true;
    },
  },
});
