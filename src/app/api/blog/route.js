import { Post } from "@/lib/models."
import { connectToDB } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async(request) => {
    try {
        await connectToDB()

        const posts = await Post.find()
        return NextResponse.json(posts)
    }catch(err) {
        console.log(err)
        throw new Error('Failled to fetch posts!')
    }
}