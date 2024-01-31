import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

// const fetchData = async(userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"})
//     if (!res.ok) {
//         throw new Error("Something went wrong")
//     }
//     return res.json()
// }

export default async function PostUser() {
  // const data = await fetchData(userId)
  // console.log(data)

  const data = await getUser("65ba3ffcee13e907050a3ced");

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={data.img? data.img : '/noavatar.png'}
        width={50}
        height={50}
        alt=""
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}> {data.username} </span>
      </div>
    </div>
  );
}
