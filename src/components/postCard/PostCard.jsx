import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { getPost } from '@/lib/data'

export default async function PostCard({post}) {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={post?.img || "https://images.pexels.com/photos/2449785/pexels-photo-2449785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}> {post?.createdAt.toString().slice(0,10)} </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post?.title} </h1>
        <p className={styles.desc}> {post?.body} </p>
        <Link className={styles.link} href={`/blog/${post?._id}`}>READ MORE</Link>
      </div>
    </div>
  )
}
