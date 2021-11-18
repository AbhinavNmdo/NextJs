import { useRouter } from 'next/dist/client/router'
import React from 'react'

const itemNo = () => {
    const router = useRouter();
    const slug = router.query.itemNo;
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}

export default itemNo;
