"use client";

import React, { useState } from "react";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";
import Link from "next/link";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

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

export default function Links({session}) {
  const [open, setOpen] = useState(false);

  // const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        <div>
          {session?.user ? (
            <div className={styles.authButton}>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <form action={handleLogout}>
                <button className={styles.logout}> Logout </button>
              </form>
            </div>
          ) : (
              <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      </div>
      <Image
        src="/menu.png"
        alt=""
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
        width={30}
        height={30}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={Link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
}
