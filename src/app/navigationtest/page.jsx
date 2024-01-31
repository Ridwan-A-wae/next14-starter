'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function Page() {
  
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get('q')
    const open = searchParams.get('open')
    const status = searchParams.get('status')

    function handleClick() {
        console.log('Clicked')
        // router.push('/')
        console.log(pathName)
        console.log(q)
        console.log(open)
        console.log(status)
    }

    return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
