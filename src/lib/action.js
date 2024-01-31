import { Post, User } from "./models.";
import { connectToDB } from "./utils";

export const addPost = async (formData) => {
  "use server";

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

export const addUser = async (formData) => {
  "use server";

  const { username, email, password, img, isAdmin } = Object.fromEntries(formData);

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
