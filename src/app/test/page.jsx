import { addPost, addUser, deletePost} from '@/lib/action'
import React from 'react'

export default function page() {

    const serverAction = async() => {
        'use server'

        console.log('It work!!')
    }

  return (
    <div>
      <h1>Post</h1>
        <form action={addPost}>
            <input type="text" placeholder='title' name='title' />
            <input type="text" placeholder='desc'  name='desc'/>
            <input type="text" placeholder='slug' name='slug'/>
            <input type="text" placeholder='userId' name='userId'/>
            <button>Create</button>
        </form>
        <form action={deletePost}>
          <input type="text" placeholder='delete' name='id' />
          <button>Delete</button>
        </form>
        <br />
        <h1>User</h1>
        <form action={addUser}>
            <input type="text" placeholder='username' name='username' />
            <input type="text" placeholder='email'  name='email'/>
            <input type="text" placeholder='password' name='password'/>
            <input type="text" placeholder='img' name='img'/>
            <input type="text" placeholder='isAdmin' name='isAdmin'/>
            <button>Create</button>
        </form>
    </div>
  )
}
