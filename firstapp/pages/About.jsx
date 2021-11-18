import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const About = () => {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
        <div>
            <Navbar/>
            <h1>This is About</h1>
        </div>
        </>
    )
}

export default About
