import { Post, User } from "./models."

export const getPosts = async() => {
    try {
        const posts = await Post.find()

        return posts
    }catch(error) {
        console.log(error)
        return {error:"Failled to get Posts"}
    }
}

export const getPost = async(slug) => {
    try {
        const post = Post.findById(slug)
        return post
    }catch(error) {
        console.log(error)
        return {error:'Failled to get a Post'}
    }
}
export const getUsers = async() => {
    try {
        const posts = await User.find()

        return posts
    }catch(error) {
        console.log(error)
        return {error:"Failled to get Posts"}
    }
}

export const getUser = async(slug) => {
    try {
        const post = User.findById(slug)
        return post
    }catch(error) {
        console.log(error)
        return {error:'Failled to get a Post'}
    }
}