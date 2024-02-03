"use client";

import React, { useEffect } from "react";
import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

    const router = useRouter()

  useEffect(() => {
    {state?.success && router.push('/blog')}
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/login">
        {"Don't have an account?"} <b>Login</b>
      </Link>
    </form>
  );
}