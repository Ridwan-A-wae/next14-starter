import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import React from "react";
import { getPosts } from "@/lib/data";

// const fetchData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}});
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

export default async function page() {
  // const data = await fetchData();

  const data = await getPosts()
console.log(data)
  return (
    <div className={styles.container}>
      {data?.map((post) => (
        <div className={styles.post} key={post._id}  >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
