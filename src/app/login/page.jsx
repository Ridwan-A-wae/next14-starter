import React from "react";
import styles from "./login.module.css";
import { handleGithubLogin, login } from "@/lib/action";

export default async function page() {
  

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with Credentials</button>
      </form>
    </div>
  );
}
