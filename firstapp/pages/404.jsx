import { useRouter } from 'next/dist/client/router'
import React from 'react'

const error = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Sorry, 404 not found</h1>
            <button><a onClick={()=>{router.push("/")}}>Home</a></button>
        </div>
    )
}

export default error
