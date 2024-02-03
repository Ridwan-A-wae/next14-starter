'use client'

import React, { useEffect } from "react";
import styles from "./registerform.module.css";
import { useFormState } from "react-dom";
import { register } from "@/lib/action";  
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function RegisterForm() {

    const [state, formAction] = useFormState(register, undefined)

    const router = useRouter()

    useEffect(() => {
        {state?.success && router.push('/login')}
    },[state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="img" placeholder="Image url" />
      <input type="password" name="password" placeholder="password" />
      <input
        type="password"
        name="passwordRepeat"
        placeholder="password again "
      />
      <button>Register</button>
      {state?.error}
      <Link href='/login'>Have an account? <b>Login</b></Link>
    </form>
  );
}
