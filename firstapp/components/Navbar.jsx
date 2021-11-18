import React from 'react'
import Link from 'next/dist/client/link'

const Navbar = () => {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/About">About</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/Items">Items</Link>
                    </li>
                    <li>
                        <Link href="/Features">Features</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
