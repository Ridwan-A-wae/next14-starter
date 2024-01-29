import Link from 'next/link';
import React from 'react'

const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

export default function Links() {
  return (
    <div>
        {links.map((link) => (
            <Link href={link.path} key={link.title}> {link.title} </Link>
        ))}
    </div>
  )
}
