import React, { Suspense } from "react";
import styles from "./slug.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";

// const fetchData = async (slug) => {
//   const res = await fetch(
//     `http://localhost:3000/api/blog/${slug}`,
//     { next: { revalidate: 3600 } }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

async function page({ params }) {
  const { slug } = await params;
  // const data = await fetchData(slug);
  const data = await getPost(slug);

  console.log(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {data?.img ? (
          <Image src={data?.img} fill className={styles.img} alt="" />
        ) : (
          <Image
            src="https://images.pexels.com/photos/2449785/pexels-photo-2449785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            className={styles.img}
            alt=""
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data?.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div> loading... </div>}>
            <PostUser data={data} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {data?.createdAt.toString().slice(3, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{data?.desc}</div>
      </div>
    </div>
  );
}

export default page;
