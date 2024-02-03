"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models.";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  console.log(title, desc, slug, userId);

  try {
    connectToDB();
    const newPost = new Post({ title, desc, slug, userId });

    newPost.save();
    console.log("Saved to database");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(id);
    console.log("deleted from database");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// User
export const addUser = async (formData) => {
  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formData);

  console.log(username, email, password, img, isAdmin);

  try {
    connectToDB();
    const newUser = new User({ username, email, password, img, isAdmin });

    newUser.save();
    console.log("Saved to database");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  "use server";

  await signIn("github");
};

export const handleLogout = async () => {
  "use server";

  await signOut();
};

export const register = async (prevState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Password does not mathch!" };
  }

  try {
    connectToDB();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    console.log('saved to db')
    await newUser.save();

    return {success: true}


  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
